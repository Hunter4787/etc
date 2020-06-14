<?php

namespace App\DataFixtures;

use App\Entity\Reservation;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class ReservationFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        for($i = 1; $i <= 10; $i++){
            $reservation = new Reservation();
            $reservation->setRoomNumber($i)
                        ->setAdulsCount($i+1)
                        ->setChildsCount($i);
            $manager->persist($reservation);
        }

        $manager->flush();
    }
}
