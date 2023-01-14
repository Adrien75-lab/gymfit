<?php

namespace App\Controller;

use App\Entity\Exercises;
use App\Repository\ExercisesRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Core\Annotation\ApiOperation;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\Put;
use ApiPlatform\Metadata\Delete;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Post;

#[ApiResource]
#[ApiResource(
    operations: [
        new Get(path: '/bodypart', controller: BodyPartController::class, summary: "Retrieves the list of body parts")
    ]
)]

class BodyPartController extends AbstractController
{
    private $exercisesRepository;

    public function __construct(ExercisesRepository $exercisesRepository)
    {
        $this->exercisesRepository = $exercisesRepository;
    }
    
    #[Route('/bodypart', name: 'bodypart_list')]
    #[ApiResource(
        operations: [
            new Get(path: '/bodypart', controller: BodyPartController::class, summary: "Retrieves the list of body parts")
        ]
    )]
    
    
    public function listExercises(): JsonResponse
    {
        $bodyParts = $this->exercisesRepository->findByParties();
        return new JsonResponse($bodyParts);
    }
}