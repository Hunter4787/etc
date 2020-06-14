<?php

namespace App\Controller;

use App\Entity\Reservation;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HotelController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function index()
    {
        return $this->render('hotel/index.html.twig');

        /**
         * @Route("/api/reservations", name="reservations")
         * @return \Symfony\Component\HttpFoundation\JsonResponse
         */
    }
        public function getReservations()
    {
        $repo = $this->getDoctrine()->getRepository(Reservation::class);

        $reservations = $repo->findAll();
        $response = new Response();

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent(json_encode($reservations));

        return $response;
    }
}
