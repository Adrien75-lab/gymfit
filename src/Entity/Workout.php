<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\WorkoutRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: WorkoutRepository::class)]
#[ApiResource(paginationEnabled: false)]
class Workout
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $nom = null;

    #[ORM\OneToMany(mappedBy: 'workout', targetEntity: Exercises::class)]
    private Collection $exercises;

    public function __construct()
    {
        $this->exercises = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(?string $nom): self
    {
        $this->nom = $nom;

        return $this;
    }

    /**
     * @return Collection<int, Exercises>
     */
    public function getExercises(): Collection
    {
        return $this->exercises;
    }

    public function addExercise(Exercises $exercise): self
    {
        if (!$this->exercises->contains($exercise)) {
            $this->exercises->add($exercise);
            $exercise->setWorkout($this);
        }

        return $this;
    }

    public function removeExercise(Exercises $exercise): self
    {
        if ($this->exercises->removeElement($exercise)) {
            // set the owning side to null (unless already changed)
            if ($exercise->getWorkout() === $this) {
                $exercise->setWorkout(null);
            }
        }

        return $this;
    }
}
