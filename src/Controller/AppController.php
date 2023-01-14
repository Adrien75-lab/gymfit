<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\ExercisesRepository;
use App\Entity\Exercises;
use App\Repository\PartieCorpsRepository;

class AppController extends AbstractController
{
    private $exercisesRepository;
    private $partieCorpsRepository;

    public function __construct(ExercisesRepository $exercisesRepository, PartieCorpsRepository $partieCorpsRepository)
    {
        $this->exercisesRepository = $exercisesRepository;
        $this->partieCorpsRepository = $partieCorpsRepository;
        
    }
    
    #[Route('/', name: 'app')]
    public function index(): Response
    {
        $exercises = $this->exercisesRepository->findAll();
        $bodyParts = $this->exercisesRepository->findByParties();
        $partieCorps = $this->partieCorpsRepository->findAll();

        dump($partieCorps);
        
        return $this->render('app/index.html.twig', []);
    }
    
}