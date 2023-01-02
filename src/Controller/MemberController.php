<?php

declare(strict_types=1);

namespace App\Controller;

use App\Repository\CoachRepository;
use App\Repository\MemberRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/coaches/{id}/members", requirements={"id"="\d+"})
 */
class MemberController extends AbstractController
{
    private CoachRepository $coachRepository;
    private MemberRepository $memberRepository;

    public function __construct(CoachRepository $coachRepository, MemberRepository $memberRepository)
    {
        $this->coachRepository = $coachRepository;
        $this->memberRepository = $memberRepository;
    }

    /**
     * @Route("/", methods={"GET"})
     */
    public function getMembers(int $id): JsonResponse
    {
        $coach = $this->coachRepository->find($id);
        $members = $this->memberRepository->findByCoach($coach);
        // Output the value of the $members variable to the browser


        return new JsonResponse(['members' => $members]);
    }
}