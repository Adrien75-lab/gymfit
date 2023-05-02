<?php

use App\Entity\User;
use App\Entity\Member;

$user = new User();
$user->setFirstName('John');
$user->setLastName('Doe');
$user->setEmail('john.doe@example.com');

$member = new Member();
$member->hydrate($user);

// Test des propriétés de l'entité Member
assert($member->getUser() === $user, 'User is not set correctly');
assert($member->getFirstName() === 'John', 'First name is not set correctly');
assert($member->getLastName() === 'Doe', 'Last name is not set correctly');
assert($member->getEmail() === 'john.doe@example.com', 'Email is not set correctly');

// Test des propriétés supplémentaires de l'entité Member
$member->setPhoneNumber('123456789');
$member->setUserAge(30);
$member->setSizeUser(180);
$member->setWeightUser(80);

assert($member->getPhoneNumber() === '123456789', 'Phone number is not set correctly');
assert($member->getUserAge() === 30, 'User age is not set correctly');
assert($member->getSizeUser() === 180, 'Size user is not set correctly');
assert($member->getWeightUser() === 80, 'Weight user is not set correctly');