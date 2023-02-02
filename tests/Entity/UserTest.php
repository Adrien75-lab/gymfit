<?php

namespace App\Tests\Entity;

use App\Entity\User as EntityUser;
use Doctrine\Persistence\ObjectManager;
use PHPUnit\Framework\TestCase;
use Faker\Factory;

class User extends TestCase
{
    
    public function testGetId()
    {
        $user = new EntityUser();
        $this->assertNull($user->getId());
    }
    public function testGetEmail()
    {
        $user = new EntityUser();
        $user->setEmail('test@example.com');
        $this->assertEquals('test@example.com', $user->getEmail());
    }
    public function testSetmail()
    {
        // L'utilisateur récupère son password
        $user = new EntityUser();
        $user->setEmail("adrichristophe@gmail.com");
        $this->assertEquals("adrichristophe@gmail.com", $user->getEmail());
    }
    public function testGetPassword()
    {
        $user = new EntityUser();
        $user->setPassword('password');
        $this->assertEquals('password', $user->getPassword());
    }

    public function testSetPassword()
    {
        $user = new EntityUser();
        $user->setPassword('password');
        $this->assertEquals('password', $user->getPassword());
    }
    public function testGetRoles()
    {
        $user = new EntityUser();
        $user->setRoles(['ROLE_USER']);
        $this->assertEquals(['ROLE_USER'], $user->getRoles());
    }

    public function testSetRoles()
    {
        $user = new EntityUser();
        $user->setRoles(['ROLE_USER']);
        $this->assertEquals(['ROLE_USER'], $user->getRoles());
    }
    public function createUser(ObjectManager $manager): void
    {

        // $product = new Product();
        // $manager->persist($product);
        $faker = Factory::create('fr_FR');
        $user = new EntityUser();
        $user->setFirstName($faker->firstName());
        $user->setLastName($faker->lastName());
        $user->setEmail($faker->email());
        $user->setPassword($faker->password());
        $user->setRoles(['ROLE_USER']);
        $manager->persist($user);
        $manager->flush();
    }
    public function testPasswordHashing()
    {
        $user = new EntityUser();
        $password = 'password';
        $hashedPassword = password_hash($password, PASSWORD_BCRYPT);
        $user->setPassword($hashedPassword);
        $this->assertTrue(password_verify($password, $user->getPassword()));
    }
   

    
}
