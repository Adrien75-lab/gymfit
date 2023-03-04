<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\CoachRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\UserInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;

#[ORM\Entity(repositoryClass: CoachRepository::class)]
#[ApiResource(paginationEnabled: false)]

class Coach
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private ?int $id = null;


    #[ORM\OneToOne(targetEntity: User::class, inversedBy: "coach")]
    #[ORM\JoinColumn(name: "id", referencedColumnName: "id", nullable: false)]
    private ?User $user = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $firstName = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $lastName = null;




    // #[ORM\ManyToOne(targetEntity: Coach::class, inversedBy: 'coaches')]
    // #[ORM\JoinColumn(nullable: true)]
    // private ?Coach $coach = null;


    public function hydrate(User $user)
    {
        
        $this->setUser($user);
        $this->setFirstName($user->getFirstName()); // initialisation de la propriété firstName
        $this->setLastName($user->getLastName()); // initialisation de la propriété firstName
        // hydratation des autres propriétés de l'entité Coach
    }

    public function getId(): ?int
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
}
