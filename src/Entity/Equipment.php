<?php

namespace App\Entity;

use App\Repository\EquipmentRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: EquipmentRepository::class)]
class Equipment
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $nameEquipment = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNameEquipment(): ?string
    {
        return $this->nameEquipment;
    }

    public function setNameEquipment(string $nameEquipment): self
    {
        $this->nameEquipment = $nameEquipment;

        return $this;
    }
}
