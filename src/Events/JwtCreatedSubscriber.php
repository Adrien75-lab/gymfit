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
        $coach = $user->getCoach();
        $data['Id'] = $user->getId();

        if ($member) {
            $data['memberId'] = $member->getId();
        }
        else if ($coach){
            $data['coachId'] = $coach->getId();
        }

        //$data['userAge'] = $user->getMember()->getUserAge();
        //$data['userAge'] = $member->getUserAge();
        //$data['kilos'] = $user->getKilos();
        //$data['calories'] = $user->getCalories();
        //$data['id'] = $user->getId();
        $event->setData($data);
    }
}
