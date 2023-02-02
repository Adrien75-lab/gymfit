<?php

namespace App\Entity;

use App\Repository\PartieCorpsRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;

#[ORM\Entity(repositoryClass: PartieCorpsRepository::class)]
#[ApiResource]
#[ApiFilter(SearchFilter::class, properties: ['nom' => 'exact'])]
#[ApiResource(paginationEnabled: false)]
class PartieCorps
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]

    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $nom = null;

    #[ORM\Column]
    private ?int $id_exercise = null;

    #[ORM\ManyToOne(targetEntity: Exercises::class, inversedBy: "partie_corps")]
    
    #[ORM\JoinColumn(name: "id_exercise")]
    private ?Exercises $exercises = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(string $nom): self
    {
        $this->nom = $nom;

        return $this;
    }
    public function getIdExercise(): ?int
    {
        return $this->id_exercise;
    }

    public function setIdExercise(int $id_exercise): self
    {
        $this->id_exercise = $id_exercise;
        return $this;
    }

    public function getExercises(): ?Exercises
    {
        return $this->exercises;
    }

    public function setExercises(?Exercises $exercises): self
    {
        $this->exercises = $exercises;

        return $this;
    }
}
