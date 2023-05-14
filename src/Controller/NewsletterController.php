<?php

namespace App\Controller;

use App\Entity\NewsletterSubscriber;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;

class NewsletterController
{
    private $entityManager;
    private $validator;

    public function __construct(EntityManagerInterface $entityManager, ValidatorInterface $validator)
    {
        $this->entityManager = $entityManager;
        $this->validator = $validator;
    }

    /**
     * @Route("/subscribe", name="subscribe", methods={"POST"})
     */
    public function subscribe(Request $request): Response
    {
        $email = $request->request->get('email');
        $subscriber = new NewsletterSubscriber();
        $subscriber->setEmail($email);

        $errors = $this->validator->validate($subscriber);

        if (count($errors) > 0) {
            return new JsonResponse([
                'status' => 400,
                'errors' => (string) $errors,
            ], 400);
        }

        $this->entityManager->persist($subscriber);
        $this->entityManager->flush();

        return new JsonResponse([
            'status' => 201,
            'message' => 'Inscription réussie ! Vérifiez votre e-mail pour confirmer votre abonnement.'
        ]);
    }
}
