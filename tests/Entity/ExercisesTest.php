<?php

use App\Entity\Exercises;
use App\Entity\BodyPart;
use PHPUnit\Framework\TestCase;

class ExercisesTest extends TestCase
{
    public function testGetId()
    {
        $exercises = new Exercises();
        $this->assertNull($exercises->getId());
    }
}
