<?php

namespace App\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\ExercisesRepository;
use App\Entity\Exercises;
use App\Entity\PartieCorps;
use App\Repository\BookingRepository;
use App\Repository\CoachRepository;
use App\Repository\MemberRepository;
use App\Repository\PartieCorpsRepository;
use App\Repository\UserRepository;
use App\Repository\WorkoutExercisesRepository;
use App\Repository\WorkoutRepository;

class AppController extends AbstractController
{
    private $exercisesRepository;
    private $partieCorpsRepository;
    private $workoutRepository;
    private $workoutExercisesRepository;
    private $userRepository;
    private $coachRepository;
    private $bookingCoachRepository;
    private $memberRepository;
    



    public function __construct(ExercisesRepository $exercisesRepository, PartieCorpsRepository $partieCorpsRepository, 
    WorkoutRepository $workoutRepository, WorkoutExercisesRepository $workoutExercisesRepository, UserRepository $userRepository,
    CoachRepository $coachRepository, BookingRepository $bookingRepository, MemberRepository $memberRepository)
    {
        $this->exercisesRepository = $exercisesRepository;
        $this->partieCorpsRepository = $partieCorpsRepository;
        $this->workoutRepository = $workoutRepository;
        $this->workoutExercisesRepository = $workoutExercisesRepository;
        $this->userRepository = $userRepository;
        $this->coachRepository = $coachRepository;
        $this->bookingCoachRepository = $bookingRepository;
        $this->memberRepository = $memberRepository;
    }

    #[Route('/', name: 'app')]
    public function index(): Response
    {
        $exercises = $this->exercisesRepository->findAll();
        $bodyParts = $this->exercisesRepository->findByParties();
        $partieCorps = $this->partieCorpsRepository->findAll();
        $workoutExercises = $this->workoutExercisesRepository->findAll();
        $workout = $this->workoutRepository->findAll();
         $user = $this->userRepository->findAll();
        $coach = $this->coachRepository->findByUserRole('ROLE_COACH');
        $member = $this->memberRepository->findByUserRole('ROLE_USER');
        $bookingCoach = $this->bookingCoachRepository->findAllCoachIds();
        $allBookingByCoach = $this->coachRepository->findOneBy(['id' => 1]);
        // Récupérer les réservations associées
        $bookings = $this->bookingCoachRepository->findBy(['coach' => $allBookingByCoach]);
        $userInfo = $this->bookingCoachRepository->getUserInformationForBooking(35);
        
        



        dump($userInfo);
        //dump($bookings);
        //dump($bookings);

        return $this->render('app/index.html.twig', []);
    }
}
