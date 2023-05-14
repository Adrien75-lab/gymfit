<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Metadata\ApiResource;
use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use Doctrine\ORM\Mapping\InheritanceType;
use Faker\Provider\Uuid as ProviderUuid;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Uid\Uuid;

#[ORM\Entity(repositoryClass: UserRepository::class)]

#[ApiResource(paginationEnabled: false)]
#[ApiResource(
    normalizationContext: ['groups' => ['read']],
    denormalizationContext: ['groups' => ['write']],
)]
#[ApiFilter(SearchFilter::class, properties: ['user' => 'exact'])]
// #[InheritanceType("JOINED")]
// #[ORM\DiscriminatorColumn(name: "discr", type: "string")]
// #[ORM\DiscriminatorMap([ "coach" => Coach::class, "user" => User::class ])]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 180, unique: true)]
    #[Groups(['read', 'write'])]
    private ?string $email = null;

    #[ORM\Column]
    private array $roles = ['ROLE_USER'];
    

    /**
     * @var string The hashed password
     */
    #[ORM\Column]
    private ?string $password = null;

    #[ORM\Column(length: 255)]
    private ?string $firstName = null;

    #[ORM\Column(length: 255)]
    private ?string $lastName = null;

    #[ORM\ManyToOne(targetEntity: self::class, inversedBy: 'coaches')]
    private ?self $user = null;

    #[ORM\OneToMany(mappedBy: 'user', targetEntity: User::class)]
    private Collection $coaches;
    #[ORM\OneToOne(targetEntity: Coach::class, mappedBy: "user", cascade: ['persist', 'remove'])]
    
    private ?Coach $coach = null;

    #[ORM\OneToOne(targetEntity: Member::class, mappedBy: "user", cascade: ['persist', 'remove'])]
    private ?Member $member = null;

    #[ORM\Column(type: "string", length: 36, unique: true, nullable: true)]
    private ?string $coachId = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $confirmationToken = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $confirmationTokenExpiresAt = null;

    #[ORM\Column(type: "boolean")]
    private bool $isVerified = false;


    public function __construct()
    {
        $this->coaches = new ArrayCollection();
    }

    public function addCoach(User $coach): self
    {
        if (!$this->coaches->contains($coach)) {
            $this->coaches[] = $coach;
            $coach->setUser($this);
        }

        return $this;
    }
    public function setCoach(User $coach): self
    {
        $this->user = $coach;

        return $this;
    }
    public function removeCoach(Coach $coach): self
    {
        if ($this->coaches->removeElement($coach)) {
            // set the owning side to null (unless already changed)
            if ($coach->getUser() === $this) {
                $coach->setUser(null);
            }
        }

        return $this;
    }
    public function getMember(): ?Member
    {
        return $this->member;
    }
    public function addMember(User $member): self
    {
        if (!$this->coaches->contains($member)) {
            $this->coaches[] = $member;
            $member->setUser($this);
        }

        return $this;
    }
    public function setMember(User $coach): self
    {
        $this->user = $coach;

        return $this;
    }
    public function removeMember(Member $member): self
    {
        if ($this->coaches->removeElement($member)) {
            // set the owning side to null (unless already changed)
            if ($member->getUser() === $this) {
                $member->setUser(null);
            }
        }

        return $this;
    }
    public function getCoach(): ?coach
    {
        return $this->coach;
    }

    /**
     * @return Collection<int, Customer>
     */
    public function getCoaches(): Collection
    {
        return $this->coaches;
    }

    // public function getCoaches(): Collection
    // {
    //     $coaches = new ArrayCollection();
    //     foreach ($this->coaches as $coach) {
    //         if (in_array('ROLE_COACH', $coach->getRoles(), true)) {
    //             $coaches->add($coach);
    //         }
    //     }
    //     return $coaches;
    // }

    public function getId(): ?int
    {
        return $this->id;
    }
    public function setId(int $id): self
    {
        $this->id = $id;
        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function getFirstName(): ?string
    {
        return $this->firstName;
    }

    public function setFirstName(string $firstName): self
    {
        $this->firstName = $firstName;

        return $this;
    }

    public function getLastName(): ?string
    {
        return $this->lastName;
    }

    public function setLastName(string $lastName): self
    {
        $this->lastName = $lastName;

        return $this;
    }

    public function getUser(): ?self
    {
        return $this->user;
    }

    public function setUser(?self $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getCoachId(): ?string
    {
        return $this->coachId;
    }

    public function setCoachId(string $coachId): self
    {
        $this->coachId = $coachId;

        return $this;
    }

    public function getConfirmationToken(): ?string
    {
        return $this->confirmationToken;
    }

    public function setConfirmationToken(?string $confirmationToken): self
    {
        $this->confirmationToken = $confirmationToken;

        return $this;
    }

    public function getConfirmationTokenExpiresAt(): ?\DateTimeInterface
    {
        return $this->confirmationTokenExpiresAt;
    }

    public function setConfirmationTokenExpiresAt(?\DateTimeInterface $confirmationTokenExpiresAt): self
    {
        $this->confirmationTokenExpiresAt = $confirmationTokenExpiresAt;

        return $this;
    }

    public function isIsVerified(): ?bool
    {
        return $this->isVerified;
    }

    public function setIsVerified(bool $isVerified): self
    {
        $this->isVerified = $isVerified;

        return $this;
    }
}
