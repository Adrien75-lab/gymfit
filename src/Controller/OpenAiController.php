<?php

namespace App\Controller;

use App\Service\OpenAiService;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class OpenAiController
{
    private $openAiService;

    public function __construct(OpenAiService $openAiService)
    {
        $this->openAiService = $openAiService;
    }

    /**
     * @Route("/api/generate-text", methods={"POST"})
     */
    public function generateText(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $prompt = $data['prompt'] ?? '';

        $generatedText = $this->openAiService->generateText($prompt);

        return new JsonResponse($generatedText);
    }
}