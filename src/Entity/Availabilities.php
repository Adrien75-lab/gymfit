<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use App\Repository\AvailabilitiesRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: AvailabilitiesRepository::class)]

#[ApiResource(paginationEnabled: false)]
#[ApiFilter(SearchFilter::class, properties: ['coach' => 'exact'])]

class Availabilities
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $startRDV = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $endRDV = null;


    #[ORM\ManyToOne(inversedBy: 'availabilities', targetEntity: Coach::class,)]
    private ?coach $coach = null;

    #[ORM\Column]
    private ?bool $isBooked = null;


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getStartRDV(): ?\DateTimeImmutable
    {
        return $this->startRDV;
    }

    public function setStartRDV(\DateTimeImmutable $startRDV): self
    {
        $this->startRDV = $startRDV;

        return $this;
    }

    public function getEndRDV(): ?\DateTimeImmutable
    {
        return $this->endRDV;
    }

    public function setEndRDV(\DateTimeImmutable $endRDV): self
    {
        $this->endRDV = $endRDV;

        return $this;
    }


    public function getCoach(): ?coach
    {
        return $this->coach;
    }

    public function setCoach(?coach $coach): self
    {
        $this->coach = $coach;

        return $this;
    }

    public function isIsBooked(): ?bool
    {
        return $this->isBooked;
    }

    public function setIsBooked(bool $isBooked): self
    {
        $this->isBooked = $isBooked;

        return $this;
    }
}
