<?php

use App\Entity\Workout;
use App\Entity\Exercises;

$workout = new Workout();
$workout->setNom('Full Body Workout');

assert($workout->getNom() === 'Full Body Workout', 'Workout name is not set correctly');

// Création des exercices
$exercise1 = new Exercises();
$exercise1->setDescription('Do push-ups for 30 seconds.');
$exercise1->setEquipement('None');
$exercise1->setPartie('Upper Body');

$exercise2 = new Exercises();

$exercise2->setDescription('Do squats for 30 seconds.');
$exercise2->setEquipement('None');
$exercise2->setPartie('Lower Body');

// Ajout des exercices à l'entraînement
$workout->addExercise($exercise1);
$workout->addExercise($exercise2);

// Vérification des exercices ajoutés à l'entraînement
$exercises = $workout->getExercises();
assert(count($exercises) === 2, 'Incorrect number of exercises in the workout');
assert($exercises->contains($exercise1), 'Exercise 1 not found in the workout');
assert($exercises->contains($exercise2), 'Exercise 2 not found in the workout');

// Vérification des relations entre les entités
assert($exercise1->getWorkout() === $workout, 'Workout not set correctly for exercise 1');
assert($exercise2->getWorkout() === $workout, 'Workout not set correctly for exercise 2');