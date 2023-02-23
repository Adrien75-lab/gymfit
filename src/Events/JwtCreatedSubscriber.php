<?php

namespace App\Events;

use Lexik\Bundle\JWTAuthenticationBundle\Event\JWTCreatedEvent;

class JwtCreatedSubscriber
{
    public function updateJwtData(JWTCreatedEvent $event)
    {
        $user = $event->getUser();
        $data = $event->getData();
        $data['firstName'] = $user->getFirstName();
        $data['lastName'] = $user->getLastName();
        $data['age'] = $user->getAge();
        $data['kilos'] = $user->getKilos();
        $data['calories'] = $user->getCalories();
        $data['id'] = $user->getId();
        $event->setData($data);
    }
}
