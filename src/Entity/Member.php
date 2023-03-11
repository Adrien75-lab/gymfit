<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\MemberRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: MemberRepository::class)]
#[ORM\Table(name: '`member`')]
#[ApiResource(paginationEnabled: false)]
#[ApiFilter(SearchFilter::class, properties: ['user' => 'exact'])]
class Member
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;
    #[ORM\OneToOne(targetEntity: User::class, inversedBy: "member", cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(name: "id", referencedColumnName: "id", nullable: false)]
    private ?User $user = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $firstName = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $lastName = null;

    #[ORM\Column(nullable: true)]
    private ?string $phoneNumber = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $email = null;

    #[ORM\Column(nullable: true)]
    private ?int $userAge = null;

    #[ORM\Column(nullable: true)]
    private ?int $sizeUser = null;

    #[ORM\Column(nullable: true)]
    private ?int $weightUser = null;

    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $SubscriberDate = null;

    #[ORM\OneToMany(mappedBy: 'user', targetEntity: Booking::class)]
    private Collection $bookings;

    public function __construct()
    {
        $this->bookings = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFirstName(): ?string
    {
        return $this->firstName;
    }

    public function setFirstName(?string $firstName): self
    {
        $this->firstName = $firstName;

        return $this;
    }

    public function getLastName(): ?string
    {
        return $this->lastName;
    }

    public function setLastName(?string $lastName): self
    {
        $this->lastName = $lastName;

        return $this;
    }

    public function getPhoneNumber(): ?string
    {
        return $this->phoneNumber;
    }

    public function setPhoneNumber(?string $phoneNumber): self
    {
        $this->phoneNumber = $phoneNumber;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(?string $email): self
    {
        $this->email = $email;

        return $this;
    }
    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }
    public function hydrate(User $user)
    {

        $this->setUser($user);
        $this->setFirstName($user->getFirstName()); // initialisation de la propriété firstName
        $this->setLastName($user->getLastName()); // initialisation de la propriété firstName
        // hydratation des autres propriétés de l'entité Member
        $this->setEmail($user->getEmail());
    }

    public function getUserAge(): ?int
    {
        return $this->userAge;
    }

    public function setUserAge(?int $userAge): self
    {
        $this->userAge = $userAge;

        return $this;
    }

    public function getSizeUser(): ?int
    {
        return $this->sizeUser;
    }

    public function setSizeUser(?int $sizeUser): self
    {
        $this->sizeUser = $sizeUser;

        return $this;
    }

    public function getWeightUser(): ?int
    {
        return $this->weightUser;
    }

    public function setWeightUser(?int $weightUser): self
    {
        $this->weightUser = $weightUser;

        return $this;
    }

    public function getSubscriberDate(): ?\DateTimeImmutable
    {
        return $this->SubscriberDate;
    }

    public function setSubscriberDate(?\DateTimeImmutable $SubscriberDate): self
    {
        $this->SubscriberDate = $SubscriberDate;

        return $this;
    }

    /**
     * @return Collection<int, Booking>
     */
    public function getBookings(): Collection
    {
        return $this->bookings;
    }

    public function addBooking(Booking $booking): self
    {
        if (!$this->bookings->contains($booking)) {
            $this->bookings->add($booking);
            $booking->setUser($this);
        }

        return $this;
    }

    public function removeBooking(Booking $booking): self
    {
        if ($this->bookings->removeElement($booking)) {
            // set the owning side to null (unless already changed)
            if ($booking->getUser() === $this) {
                $booking->setUser(null);
            }
        }

        return $this;
    }
}
