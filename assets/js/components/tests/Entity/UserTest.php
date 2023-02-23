<?php

namespace App\Tests\Entity;

use App\Entity\User as EntityUser;
use PHPUnit\Framework\TestCase;

class User extends TestCase
{
    public function testUser()
    {
        // L'utilisateur récupère son password
        $user = new EntityUser();
        $password = "Test 1";

        $user->setPassword($password);
        $this->assertEquals("Test 1", $user->getPassword());

        // Si 2 utilisateurs n'ont pas le meme password


        // Si L'inscription est ok 



    }
}
