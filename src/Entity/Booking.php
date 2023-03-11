<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\BookingRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Serializer\Annotation\SerializedName;

#[ORM\Entity(repositoryClass: BookingRepository::class)]
#[ApiFilter(SearchFilter::class, properties: ['coach' => 'exact','user' => 'exact'])]

#[ApiResource(
    paginationEnabled: false,
    collectionOperations: [
        'get',
        'post' => [
            'method' => 'POST',
            'path' => '/bookings/{id}/booking',

            'openapi_context' => [
                'requestBody' => [
                    'content' => [
                        'application/json' => [
                            'schema' => [
                                'type' => 'object',
                                'properties' => [
                                    'coach' => ['type' => 'integer'],
                                    'user' => ['type' => 'integer'],
                                    'stateRDV' => ['type' => 'string'],
                                    'created_at' => ['type' => 'string', 'format' => 'date-time'],
                                    'duration' => ['type' => 'string'],
                                    'startRDV' => ['type' => 'string', 'format' => 'date-time'],
                                    'endRDV' => ['type' => 'string', 'format' => 'date-time'],
                                ],
                                'required' => [
                                    'coach',
                                    'user',
                                    'stateRDV',
                                    'created_at',
                                    'duration',
                                    'startRDV',
                                    'endRDV',
                                ],
                            ],
                        ],
                    ],
                ],
            ],
        ],
    ],
)]

class Booking
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $stateRDV = null;

    #[ORM\ManyToOne(inversedBy: 'bookings', targetEntity: Coach::class, cascade: ['persist', 'remove'])]
    #[Groups(['booking:read'])]
    #[SerializedName('coach')]
    private ?Coach $coach = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $created_at = null;

    #[ORM\Column(length: 255)]
    private ?string $duration = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $startRDV = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $endRDV = null;

    #[ORM\ManyToOne(inversedBy: 'bookings', targetEntity: Member::class, cascade: ['persist', 'remove'])]
    #[Groups(['booking:read'])]
    #[SerializedName('user')]
    private ?member $user = null;

    

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

    public function getCoach(): ?Coach
    {
        return $this->coach;
    }

    public function setCoach(?Coach $coach): self
    {
        $this->coach = $coach;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->created_at;
    }

    public function setCreatedAt(\DateTimeImmutable $created_at): self
    {
        $this->created_at = $created_at;

        return $this;
    }

    public function getDuration(): ?string
    {
        return $this->duration;
    }

    public function setDuration(string $duration): self
    {
        $this->duration = $duration;

        return $this;
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

    public function getUser(): ?member
    {
        return $this->user;
    }

    public function setUser(?member $user): self
    {
        $this->user = $user;

        return $this;
    }
}
