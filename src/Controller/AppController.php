<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\ExercisesRepository;
use App\Entity\Exercises;
use App\Repository\PartieCorpsRepository;
use App\Repository\WorkoutExercisesRepository;
use App\Repository\WorkoutRepository;

class AppController extends AbstractController
{
    private $exercisesRepository;
    private $partieCorpsRepository;
    private $workoutRepository;
    private $workoutExercisesRepository;

    public function __construct(ExercisesRepository $exercisesRepository, PartieCorpsRepository $partieCorpsRepository, WorkoutRepository $workoutRepository, WorkoutExercisesRepository $workoutExercisesRepository)
    {
        $this->exercisesRepository = $exercisesRepository;
        $this->partieCorpsRepository = $partieCorpsRepository;
        $this->workoutRepository = $workoutRepository;
        $this->workoutExercisesRepository = $workoutExercisesRepository;
    }

    #[Route('/', name: 'app')]
    public function index(): Response
    {
        $exercises = $this->exercisesRepository->findAll();
        $bodyParts = $this->exercisesRepository->findByParties();
        $partieCorps = $this->partieCorpsRepository->findAll();
        $workoutExercises = $this->workoutExercisesRepository->findAll();
        $workout = $this->workoutRepository->findAll();

        dump($workoutExercises);

        return $this->render('app/index.html.twig', []);
    }
}
