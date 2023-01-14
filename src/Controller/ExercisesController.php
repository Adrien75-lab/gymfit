<?php
namespace App\Controller;
use App\Entity\Exercises;
use App\Repository\ExercisesRepository;

class ExercisesController
{
    private $exercisesRepository;

    public function __construct(ExercisesRepository $exercisesRepository)
    {
        $this->exercisesRepository = $exercisesRepository;
    }

    public function listExercises(): void
    {
        $exercises = $this->exercisesRepository->findAll();
        dump($exercises);
    }
}