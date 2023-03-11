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
            $coachSpeciality = new Coach();
            // Lie la spécialité au coach existant

            $coachSpeciality->setSpeciality('squat');


            $coachSpeciality->hydrate($coach);

            $manager->persist($coach);
            $manager->persist($coachSpeciality);
            for ($m = 0; $m < mt_rand(5, 50); $m++) {
                $member = new User();
                $passwordMember = $this->hasher->hashPassword($member, 'password');
                $member->setFirstName($faker->firstName())
                    ->setLastName($faker->lastName())
                    ->setEmail($faker->email())
                    ->setPassword($passwordMember)
                    ->setRoles(['ROLE_USER'])
                    ->setCoach($coach);

                $memberNewProperties = new Member();
                $memberNewProperties->setPhoneNumber($faker->phoneNumber());
                $memberNewProperties->setUserAge($faker->numberBetween(18, 60)); // génère un nombre aléatoire entre 18 et 60 pour userAge
                $memberNewProperties->setSizeUser($faker->numberBetween(150, 200)); // génère un nombre aléatoire entre 150 et 200 pour sizeUser
                $memberNewProperties->setWeightUser($faker->numberBetween(50, 100)); // génère un nombre aléatoire entre 50 et 100 pour weightUser
                $memberNewProperties->hydrate($member);


                $manager->persist($member);
                $manager->persist($memberNewProperties);
            }
        }

        $manager->flush();

        // Get coaches
        $coachList = $manager->getRepository(Coach::class)->findByUserRole('ROLE_COACH');
        $memberList = $manager->getRepository(Member::class)->findByUserRole('ROLE_USER');

        // Create bookings
        foreach ($coachList as $coachBooking) {
            for ($i = 0; $i < 5; $i++) {
                $booking = new Booking();

                $booking->setCoach($coachBooking)
                    ->setUser($faker->randomElement($memberList))
                    ->setStateRDV($faker->randomElement(['CONFIRMED', 'PENDING', 'CANCELLED']));


                // Generate a random creation date between now and 7 days from now
                $startTime = new \DateTimeImmutable();
                $endTime = $startTime->add(new \DateInterval('P7D'));
                $interval = $endTime->getTimestamp() - $startTime->getTimestamp();
                $randomSeconds = mt_rand(0, $interval);
                $booking->setCreatedAt($startTime->add(new \DateInterval('PT' . $randomSeconds . 'S')));

                $booking->setDuration('1 hour');


                // Generate a random start time between now and 7 days from now
                $startTime = new \DateTimeImmutable();
                $endTime = $startTime->add(new \DateInterval('P7D'));
                $interval = $endTime->getTimestamp() - $startTime->getTimestamp();
                $randomSeconds = mt_rand(0, $interval);
                $booking->setStartRDV($startTime->add(new \DateInterval('PT' . $randomSeconds . 'S')));

                // Set the end time to be 1 hour after the start time
                $booking->setEndRDV($booking->getStartRDV()->add(new \DateInterval('PT1H')));

                // Set other properties for the booking entity
                $manager->persist($booking);
            }
        }

        // Create members



        $manager->flush();
    }
}
