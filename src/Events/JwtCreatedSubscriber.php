<?php

namespace App\Events;

use Lexik\Bundle\JWTAuthenticationBundle\Event\JWTCreatedEvent;

class JwtCreatedSubscriber
{
    public function updateJwtData(JWTCreatedEvent $event)
    {
        $user = $event->getUser();
        $member = $user->getMember();
        $data = $event->getData();

        $data['firstName'] = $user->getFirstName();
        $data['lastName'] = $user->getLastName();
        $data['Id'] = $user->getId();

        if ($member) {
            $data['memberId'] = $member->getId();
        }

        //$data['userAge'] = $user->getMember()->getUserAge();
        //$data['userAge'] = $member->getUserAge();
        //$data['kilos'] = $user->getKilos();
        //$data['calories'] = $user->getCalories();
        //$data['id'] = $user->getId();
        $event->setData($data);
    }
}
