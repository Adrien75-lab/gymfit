<?php

namespace App\Entity;

use App\Repository\WorkoutExercisesRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: WorkoutExercisesRepository::class)]
class WorkoutExercises
{
    
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\ManyToOne(targetEntity: Workout::class)]
    #[ORM\JoinColumn(name: "workout_id", referencedColumnName: "id")]
    private $workout;

    #[ORM\ManyToOne(targetEntity: Exercises::class)]
    #[ORM\JoinColumn(name: "exercise_id", referencedColumnName: "id")]
    private $exercises;


    public function __construct()
    {
    }

    

    public function getWorkout(): ?Workout
    {
        return $this->workout;
    }

    public function setWorkout(?Workout $workout): self
    {
        $this->workout = $workout;

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
