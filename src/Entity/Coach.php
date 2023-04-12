<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use App\Repository\CoachRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\UserInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;

#[ORM\Entity(repositoryClass: CoachRepository::class)]
#[ApiResource(paginationEnabled: false)]
#[ApiFilter(SearchFilter::class, properties: ['availabilities' => 'exact'])]

class Coach
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private ?int $id = null;


    #[ORM\OneToOne(targetEntity: User::class, inversedBy: "coach", cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(name: "id", referencedColumnName: "id", nullable: false)]
    private ?User $user = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $firstName = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $lastName = null;
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $email = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $speciality = null;

    #[ORM\OneToMany(mappedBy: 'coach', targetEntity: Booking::class)]
    private Collection $bookings;

    #[ORM\OneToMany(mappedBy: 'coach', targetEntity: Availabilities::class)]
    private Collection $availabilities;

    public function __construct()
    {
        $this->bookings = new ArrayCollection();
        $this->availabilities = new ArrayCollection();
    }




    // #[ORM\ManyToOne(targetEntity: Coach::class, inversedBy: 'coaches')]
    // #[ORM\JoinColumn(nullable: true)]
    // private ?Coach $coach = null;


    // La fonction hydrate est utilisée pour copier les données de 
    //l'objet User vers l'objet Coach, afin d'éviter la duplication de données.

    public function hydrate(User $user)
    {

        $this->setUser($user);
        $this->setFirstName($user->getFirstName()); // initialisation de la propriété firstName
        $this->setLastName($user->getLastName()); // initialisation de la propriété firstName
        $this->setEmail($user->getEmail());
    }

    public function getId(): ?int
    {
        return $this->id;
    }
    public function setId(): ?int
    {
        return $this->id;
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

    // public function getCoach(): ?Coach
    // {
    //     return $this->coach;
    // }

    // public function setCoach(?Coach $coach): self
    // {
    //     $this->coach = $coach;

    //     return $this;
    // }

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
    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(?string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getSpeciality(): ?string
    {
        return $this->speciality;
    }

    public function setSpeciality(?string $speciality): self
    {
        $this->speciality = $speciality;

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
            $booking->setCoach(null);
        }

        return $this;
    }

    public function removeBooking(Booking $booking): self
    {
        if ($this->bookings->removeElement($booking)) {
            // set the owning side to null (unless already changed)
            if ($booking->getCoach() === $this) {
                $booking->setCoach(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Availabilities>
     */
    public function getAvailabilities(): Collection
    {
        return $this->availabilities;
    }

    public function addAvailability(Availabilities $availability): self
    {
        if (!$this->availabilities->contains($availability)) {
            $this->availabilities->add($availability);
            $availability->setCoach($this);
        }

        return $this;
    }

    public function removeAvailability(Availabilities $availability): self
    {
        if ($this->availabilities->removeElement($availability)) {
            // set the owning side to null (unless already changed)
            if ($availability->getCoach() === $this) {
                $availability->setCoach(null);
            }
        }

        return $this;
    }
}
