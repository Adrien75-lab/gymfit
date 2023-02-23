<?php

namespace App\Events;

use ApiPlatform\Core\EventListener\EventPriorities;
use App\Entity\Coach;
use App\Entity\Member;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\ViewEvent;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class PasswordEncoderSubscriber implements EventSubscriberInterface
{
    private $encoder;

    public function __construct(UserPasswordHasherInterface $encoder)
    {
        $this->encoder = $encoder;
    }
    public static function getSubscribedEvents()
    {
        return [
            KernelEvents::VIEW => ['encodePassword', EventPriorities::PRE_WRITE]
        ];


    }
    public function encodePassword(ViewEvent $event)
    {
        $coach = $event->getControllerResult();
        $method = $event->getRequest()->getMethod();

        $member = $event->getControllerResult();
        $method = $event->getRequest()->getMethod();

        if ($coach instanceof Coach && $method === "POST") {
            $hash = $this->encoder->hashPassword($coach, $coach->getPassword());
            $coach->setPassword($hash);
        } elseif ($member instanceof Member && $method === "POST") {
            $hash = $this->encoder->hashPassword($member, $member->getPassword());
            $member->setPassword($hash);
        }

    }
}