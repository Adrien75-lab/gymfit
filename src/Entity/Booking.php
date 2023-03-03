<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\BookingRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: BookingRepository::class)]
#[ApiResource(paginationEnabled: false)]
class Booking
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $stateRDV = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getStateRDV(): ?string
    {
        return $this->stateRDV;
    }

    public function setStateRDV(string $stateRDV): self
    {
        $this->stateRDV = $stateRDV;

        return $this;
    }
}
