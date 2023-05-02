<?php

namespace App\Tests\Entity;

use App\Entity\Booking;
use App\Entity\Coach;
use App\Entity\Member;
use PHPUnit\Framework\TestCase;
use Faker\Factory;

class BookingTest extends TestCase
{
    public function testGetId()
    {
        $booking = new Booking();
        $this->assertNull($booking->getId());
    }

    public function testGetAndSetStateRDV()
    {
        $booking = new Booking();
        $booking->setStateRDV('Confirmed');
        $this->assertEquals('Confirmed', $booking->getStateRDV());
    }

    public function testGetAndSetCoach()
    {
        $booking = new Booking();
        $coach = new Coach();
        $booking->setCoach($coach);
        $this->assertSame($coach, $booking->getCoach());
    }

    public function testGetAndSetCreatedAt()
    {
        $booking = new Booking();
        $dateTime = new \DateTimeImmutable();
        $booking->setCreatedAt($dateTime);
        $this->assertEquals($dateTime, $booking->getCreatedAt());
    }

    public function testGetAndSetDuration()
    {
        $booking = new Booking();
        $booking->setDuration('1 hour');
        $this->assertEquals('1 hour', $booking->getDuration());
    }

    public function testGetAndSetStartRDV()
    {
        $booking = new Booking();
        $dateTime = new \DateTimeImmutable();
        $booking->setStartRDV($dateTime);
        $this->assertEquals($dateTime, $booking->getStartRDV());
    }

    public function testGetAndSetEndRDV()
    {
        $booking = new Booking();
        $dateTime = new \DateTimeImmutable();
        $booking->setEndRDV($dateTime);
        $this->assertEquals($dateTime, $booking->getEndRDV());
    }

    public function testGetAndSetUser()
    {
        $booking = new Booking();
        $user = new Member();
        $booking->setUser($user);
        $this->assertSame($user, $booking->getUser());
    }

    public function testCreateBooking()
    {
        $faker = Factory::create('fr_FR');
        $booking = new Booking();

        $coach = new Coach();
        $user = new Member();
        $dateTimeNow = new \DateTimeImmutable();
        $randomInterval = new \DateInterval('PT' . $faker->numberBetween(0, 1000) . 'S');
        $randomDateTime = $dateTimeNow->add($randomInterval);


        $booking->setStateRDV($faker->word());
        $booking->setCoach($coach);
        $booking->setCreatedAt($randomDateTime);
        $booking->setDuration($faker->randomDigitNotNull() . ' hour');
        $booking->setStartRDV($randomDateTime);
        $booking->setEndRDV($randomDateTime);
        $booking->setUser($user);

        $this->assertNotNull($booking->getStateRDV());
        $this->assertSame($coach, $booking->getCoach());
        $this->assertNotNull($booking->getCreatedAt());
        $this->assertNotNull($booking->getDuration());
        $this->assertNotNull($booking->getStartRDV());
        $this->assertNotNull($booking->getEndRDV());
        $this->assertSame($user, $booking->getUser());
    }
}
