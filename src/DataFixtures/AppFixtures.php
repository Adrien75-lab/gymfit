<?php

namespace App\DataFixtures;

use App\Entity\Booking;
use App\Entity\Coach;
use App\Entity\Customer;
use App\Entity\Member;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class AppFixtures extends Fixture
{
    private UserPasswordHasherInterface $hasher;

    public function __construct(UserPasswordHasherInterface $hasher)
    {
        $this->hasher = $hasher;
    }
    public function load(ObjectManager $manager): void
    {
        $faker = Factory::create('fr_FR');
        // $coaches = [];

        // Create coaches
        for ($c = 0; $c < 10; $c++) {
            $coach = new User();
            $password = $this->hasher->hashPassword($coach, 'password');
            $coach->setFirstName($faker->firstName())
                ->setLastName($faker->lastName())
                ->setEmail($faker->email())
                ->setPassword($password)
                ->setRoles(['ROLE_COACH']);

            $manager->persist($coach);
            for ($m = 0; $m < mt_rand(5, 50); $m++) {
                $member = new User();
                $passwordMember = $this->hasher->hashPassword($member, 'password');
                $member->setFirstName($faker->firstName())
                    ->setLastName($faker->lastName())
                    ->setEmail($faker->email())
                    ->setPassword($passwordMember)
                    ->setRoles(['ROLE_USER'])
                    ->setCoach($coach);;

                $manager->persist($member);
            }
        }

        $manager->flush();

        // Get coaches
        $coachList = $manager->getRepository(Coach::class)->findByUserRole('ROLE_COACH');

        // Create bookings
        foreach ($coachList as $coachBooking) {
            for ($i = 0; $i < 5; $i++) {
                $booking = new Booking();

                $booking->setCoach($coachBooking)
                    ->setStateRDV('en attente');
                // Set other properties for the booking entity
                $manager->persist($booking);
            }
        }

        // Create members



        $manager->flush();
    }
}
