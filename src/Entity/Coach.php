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
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(targetEntity: Coach::class)]
    private ?Coach $coach = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $speciality = null;


    #[ORM\Column(length: 255)]
    private ?string $firstName = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCoach(): ?Coach
    {
        return $this->coach;
    }

    public function setCoach(?Coach $coach): self
    {
        // unset the owning side of the relation if necessary
        if ($coach === null && $this->coach !== null) {
            $this->coach->setCoach(null);
        }

        // set the owning side of the relation if necessary
        if ($coach !== null && $coach->getCoach() !== $this) {
            $coach->setCoach($this);
        }

        $this->coach = $coach;

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

    public function getFirstName(): ?string
    {
        return $this->firstName;
    }

    public function setFirstName(string $firstName): self
    {
        $this->firstName = $firstName;

        return $this;
    }
    public function getRoles(): array
    {
        if ($this->getCoach() instanceof UserInterface) {
            return $this->getCoach()->getRoles();
        }

        return [];
    }
}
