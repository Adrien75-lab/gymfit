<?php

namespace App\Tests\Entity;

use App\Entity\Availabilities;
use App\Entity\Coach;
use PHPUnit\Framework\TestCase;
use Faker\Factory;

class AvailabilitiesTest extends TestCase
{
    public function testGetId()
    {
        $availability = new Availabilities();
        $this->assertNull($availability->getId());
    }

    public function testGetStartRDV()
    {
        $availability = new Availabilities();
        $availability->setStartRDV(new \DateTimeImmutable('2023-04-24 09:00:00'));
        $this->assertEquals('2023-04-24 09:00:00', $availability->getStartRDV()->format('Y-m-d H:i:s'));
    }

    public function testGetEndRDV()
    {
        $availability = new Availabilities();
        $availability->setEndRDV(new \DateTimeImmutable('2023-04-24 10:00:00'));
        $this->assertEquals('2023-04-24 10:00:00', $availability->getEndRDV()->format('Y-m-d H:i:s'));
    }

    public function testGetCoach()
    {
        $availability = new Availabilities();
        $coach = new Coach();
        $availability->setCoach($coach);
        $this->assertSame($coach, $availability->getCoach());
    }

    public function testIsBooked()
    {
        $availability = new Availabilities();
        $availability->setIsBooked(true);
        $this->assertTrue($availability->isIsBooked());
    }

    public function testCreateAvailability()
    {
        $faker = Factory::create('fr_FR');
        $availability = new Availabilities();

        $coach = new Coach();
        $startRDV = new \DateTimeImmutable($faker->dateTimeBetween('now', '+1 week')->format('Y-m-d H:i:s'));
        $endRDV = $startRDV->add(new \DateInterval('PT1H'));

        $availability->setStartRDV($startRDV);
        $availability->setEndRDV($endRDV);
        $availability->setCoach($coach);
        $availability->setIsBooked(false);

        $this->assertNotNull($availability->getStartRDV());
        $this->assertNotNull($availability->getEndRDV());
        $this->assertSame($coach, $availability->getCoach());
        $this->assertFalse($availability->isIsBooked());
    }
}