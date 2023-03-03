<?php

namespace App\Entity;

use App\Repository\GymRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: GymRepository::class)]
class Gym
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $nameGym = null;

    #[ORM\Column]
    private ?int $postalcodeGym = null;

    #[ORM\Column(length: 255)]
    private ?string $cityGym = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $comment = null;

    #[ORM\Column(length: 255)]
    private ?string $adressGym = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNameGym(): ?string
    {
        return $this->nameGym;
    }

    public function setNameGym(string $nameGym): self
    {
        $this->nameGym = $nameGym;

        return $this;
    }

    public function getPostalcodeGym(): ?int
    {
        return $this->postalcodeGym;
    }

    public function setPostalcodeGym(int $postalcodeGym): self
    {
        $this->postalcodeGym = $postalcodeGym;

        return $this;
    }

    public function getCityGym(): ?string
    {
        return $this->cityGym;
    }

    public function setCityGym(string $cityGym): self
    {
        $this->cityGym = $cityGym;

        return $this;
    }

    public function getComment(): ?string
    {
        return $this->comment;
    }

    public function setComment(string $comment): self
    {
        $this->comment = $comment;

        return $this;
    }

    public function getAdressGym(): ?string
    {
        return $this->adressGym;
    }

    public function setAdressGym(string $adressGym): self
    {
        $this->adressGym = $adressGym;

        return $this;
    }
}
