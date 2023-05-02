<?php

use App\Entity\Exercises;
use App\Entity\PartieCorps;

$exercise = new Exercises();
$exercise->setDescription("Do push-ups for 30 seconds.");
$exercise->setEquipement("None");
$exercise->setPartie("Upper Body");


assert($exercise->getDescription() === "Do push-ups for 30 seconds.", "Exercises description is not set correctly");
assert($exercise->getEquipement() === "None", "Exercises equipment is not set correctly");
assert($exercise->getPartie() === "Upper Body", "Exercises body part is not set correctly");

$partieCorps = new PartieCorps();
$partieCorps->setNom("Chest");
$exercise->addPartieCorps($partieCorps);

$partieCorpsCollection = $exercise->getPartieCorps();

assert($partieCorpsCollection->count() === 1, "PartieCorps count is not correct");
assert($partieCorpsCollection->first() === $partieCorps, "PartieCorps is not added correctly");

$exercise->removePartieCorps($partieCorps);

$partieCorpsCollection = $exercise->getPartieCorps();

assert($partieCorpsCollection->count() === 0, "PartieCorps count is not correct after removal");
