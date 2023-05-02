<?php

namespace App\Tests\Entity;

use App\Entity\Coach;
use App\Entity\User;
use App\Entity\Availabilities;
use App\Entity\Booking;
use PHPUnit\Framework\TestCase;

class CoachTest extends TestCase
{
    public function testGetId()
    {
        $coach = new Coach();
        $this->assertNull($coach->getId());
    }

    public function testHydrate()
    {
        $user = new User();
        $user->setFirstName('John');
        $user->setLastName('Doe');
        $user->setEmail('john.doe@example.com');

        $coach = new Coach();
        $coach->hydrate($user);

        $this->assertEquals($user, $coach->getUser());
        $this->assertEquals('John', $coach->getFirstName());
        $this->assertEquals('Doe', $coach->getLastName());
        $this->assertEquals('john.doe@example.com', $coach->getEmail());
    }

    public function testSpeciality()
    {
        $coach = new Coach();
        $coach->setSpeciality('Fitness');
        $this->assertEquals('Fitness', $coach->getSpeciality());
    }

    public function testAddAvailability()
    {
        $availability = new Availabilities();

        $coach = new Coach();
        $coach->addAvailability($availability);

        $this->assertContains($availability, $coach->getAvailabilities());
    }

    public function testRemoveAvailability()
    {
        $availability = new Availabilities();

        $coach = new Coach();
        $coach->addAvailability($availability);
        $coach->removeAvailability($availability);

        $this->assertNotContains($availability, $coach->getAvailabilities());
    }

    public function testAddBooking()
    {
        $booking = new Booking();

        $coach = new Coach();
        $coach->addBooking($booking);

        $this->assertContains($booking, $coach->getBookings());
    }

    public function testRemoveBooking()
    {
        $booking = new Booking();

        $coach = new Coach();
        $coach->addBooking($booking);
        $coach->removeBooking($booking);

        $this->assertNotContains($booking, $coach->getBookings());
    }
}