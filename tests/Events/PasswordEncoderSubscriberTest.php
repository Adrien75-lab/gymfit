<?php

namespace App\Tests\Events;

use App\Entity\User;
use App\Events\PasswordEncoderSubscriber;
use PHPUnit\Framework\TestCase;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Event\ViewEvent;
use Symfony\Component\HttpKernel\HttpKernelInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;


class PasswordEncoderSubscriberTest extends TestCase
{
    /** 
     * @return array
     */
    public function testEncodePassword(): void
    {
        /** @var UserPasswordHasherInterface|\PHPUnit\Framework\MockObject\MockObject $passwordHasher 
         
         */
        $passwordHasher = $this->getMockBuilder(UserPasswordHasherInterface::class)
            ->getMock();

        $passwordHasher->expects($this->once())
            ->method('hashPassword')
            ->with($this->isInstanceOf(User::class), 'plain_password')
            ->willReturn('hashed_password');

        $subscriber = new PasswordEncoderSubscriber($passwordHasher);

        $user = new User();
        $user->setPassword('plain_password');

        $request = new Request([], [], [], [], [], [], [], []);
        $request->setMethod('POST');

        $kernel = $this->createMock(HttpKernelInterface::class);

        $controllerResult = $user;

        $event = new ViewEvent(
            $kernel,
            $request,
            HttpKernelInterface::MAIN_REQUEST,
            $controllerResult
        );

        $subscriber->encodePassword($event);

        $this->assertEquals('hashed_password', $user->getPassword());
    }
}
