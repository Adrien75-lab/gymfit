<?php

namespace App\Entity;

use App\Repository\ObjectiveRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ObjectiveRepository::class)]
class Objective
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?int $weightObjective = null;

    #[ORM\Column]
    private ?int $heightObjective = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getWeightObjective(): ?int
    {
        return $this->weightObjective;
    }

    public function setWeightObjective(int $weightObjective): self
    {
        $this->weightObjective = $weightObjective;

        return $this;
    }

    public function getHeightObjective(): ?int
    {
        return $this->heightObjective;
    }

    public function setHeightObjective(int $heightObjective): self
    {
        $this->heightObjective = $heightObjective;

        return $this;
    }
}
