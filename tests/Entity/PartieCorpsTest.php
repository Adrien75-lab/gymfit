<?php

use App\Entity\Exercises;
use App\Entity\PartieCorps;

$partieCorps = new PartieCorps();
$partieCorps->setNom("Chest");

assert($partieCorps->getNom() === "Chest", "PartieCorps name is not set correctly");

$exercise = new Exercises();
$exercise->setDescription("Do push-ups for 30 seconds.");
$exercise->setEquipement("None");
$exercise->setPartie("Upper Body");

$partieCorps->setExercises($exercise);

assert($partieCorps->getExercises() === $exercise, "Exercises not set correctly for the PartieCorps");