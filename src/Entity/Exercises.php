<?php

namespace App\Entity;

use App\Repository\ExercisesRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Core\Annotation\ApiFilter;
use Symfony\Component\Validator\Constraints as Assert; // Symfony's built-in constraints
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;

#[ORM\Entity(repositoryClass: ExercisesRepository::class)]
#[ApiResource]
#[ApiFilter(SearchFilter::class, properties: ['partie' => 'exact'])]




class Exercises
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 171)]
    private ?string $nom = null;


    #[ORM\Column]
    #[Assert\NotBlank]
    private ?string $cible = '';

    #[ORM\Column(length: 255)]
    private ?string $equipement = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $description = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $updatedAt = null;

    #[ORM\Column]
    private ?string $partie = null;

    #[ORM\OneToMany(mappedBy: 'exercises', targetEntity: PartieCorps::class)]
    
    private Collection $partie_corps;

    public function __construct()
    {
        $this->partie_corps = new ArrayCollection();
    }

    // /**
    //  * @ORM\Column(type="datetime")
    //  */
    // private ?\DateTimeInterface $createdAt;
    // /**
    //  * @ORM\Column(type="datetime")
    //  */
    // private ?\DateTimeInterface $updatedAt;





    /**
     * @ORM\PrePersist
     * @ORM\PreUpdate
     */
    public function updateTimestamps(): void
    {
        if ($this->getCreatedAt() === null) {
            $this->setCreatedAt(new \DateTime());
        }
        $this->setUpdatedAt(new \DateTime());
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }




    public function getCible(array $cible): array
    {
        $this->cible = $cible;
        return array_unique($cible);
    }

    public function setCible(array $cible): self
    {
        $this->cible = $cible;

        return $this;
    }

    public function getEquipement(): ?string
    {
        return $this->equipement;
    }

    public function setEquipement(string $equipement): self
    {
        $this->equipement = $equipement;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(?\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    /**
     * @return Collection<int, PartieCorps>
     */
    public function getPartieCorps(): Collection
    {
        return $this->partie_corps;
    }

    public function addPartieCorps(PartieCorps $partieCorps): self
    {
        if (!$this->partie_corps->contains($partieCorps)) {
            $this->partie_corps->add($partieCorps);
            $partieCorps->setExercises($this);
        }

        return $this;
    }

    public function removePartieCorps(PartieCorps $partieCorps): self
    {
        if ($this->partie_corps->removeElement($partieCorps)) {
            // set the owning side to null (unless already changed)
            if ($partieCorps->getExercises() === $this) {
                $partieCorps->setExercises(null);
            }
        }

        return $this;
    }
}
