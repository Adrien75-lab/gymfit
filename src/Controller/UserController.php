<?php

namespace App\Controller;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Psr\Log\LoggerInterface;

class UserController
{
    private $entityManager;
    private $logger;

    public function __construct(EntityManagerInterface $entityManager, LoggerInterface $logger)
    {
        $this->entityManager = $entityManager;
        $this->logger = $logger;
    }

    /**
     * @Route("/api/verify-token/{token}", name="api_verify_token", methods={"POST"})
     */
    public function verifyToken(string $token): JsonResponse
    {
        $user = $this->entityManager
            ->getRepository(User::class)
            ->findOneBy(['confirmationToken' => $token]);

        if ($user === null) {
            $this->logger->error('Invalid token', ['token' => $token]);
            return new JsonResponse(['error' => 'Invalid token'], JsonResponse::HTTP_BAD_REQUEST);
        }

        $now = new \DateTime();

        if ($user->getConfirmationTokenExpiresAt() < $now) {
            $this->logger->error('Token expired', ['token' => $token]);
            return new JsonResponse(['error' => 'Token expired'], JsonResponse::HTTP_BAD_REQUEST);
        }

        $user->setIsVerified(true);
        $this->entityManager->persist($user);
        $this->entityManager->flush();

        return new JsonResponse(['success' => 'Account verified'], JsonResponse::HTTP_OK);
    }
    /**
     * @Route("/api/confirm-member/{email}", name="api_confirm_member", methods={"POST"})
     */
    public function confirmMember(string $email): JsonResponse
    {
        $user = $this->entityManager
            ->getRepository(User::class)
            ->findOneBy(['email' => $email]);

        if ($user === null) {
            $this->logger->error('Invalid email', ['email' => $email]);
            return new JsonResponse(['error' => 'Invalid email'], JsonResponse::HTTP_BAD_REQUEST);
        }

        $user->setIsVerified(true);
        $this->entityManager->persist($user);
        $this->entityManager->flush();

        return new JsonResponse(['success' => 'Account verified'], JsonResponse::HTTP_OK);
    }
}
