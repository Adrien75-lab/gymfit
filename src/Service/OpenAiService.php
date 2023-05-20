<?php

namespace App\Service;

use Symfony\Component\HttpClient\HttpClient;

class OpenAiService
{
    private $httpClient;
    private $openAiKey;

    public function __construct(string $openAiKey)
    {
        $this->httpClient = HttpClient::create();
        $this->openAiKey = $openAiKey;
    }

    public function generateText(string $prompt)
    {
        $response = $this->httpClient->request('POST', 'https://api.openai.com/v1/completions', [
            'headers' => [
                'Authorization' => 'Bearer ' . $this->openAiKey,
                'Content-Type' => 'application/json'
            ],
            'json' => [
                'model' => 'text-davinci-003',
                'prompt' => $prompt,
                'max_tokens' => 100,
                'temperature' => 0.5,
                'top_p' => 1,
                'n' => 1,
                'stream' => false,
            ],
        ]);

        return $response->toArray();
    }
}