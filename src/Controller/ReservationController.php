<?php

namespace App\Controller;

use App\Repository\ReservationRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Routing\Annotation\Route;

    /**
     * @Route("/api/reservations", name="api_reservation")
     */
class ReservationController extends AbstractController
{

    private $reservationRepository;


    public function __construct(ReservationRepository $reservationRepository)
    {

        $this->reservationRepository = $reservationRepository;
    }

    /**
     * @Route("/read", name="api_reservation_read")
     */
    public function read()
    {
        $reservations = $this->reservationRepository->findAll();
        $arrayOfReservations = [];

        foreach ($reservations as $reservation) {
            $arrayOfReservations[] = $reservation->toArray();
        }

        return $this->json($arrayOfReservations);
    }


    /**
     * @Route("/create", name="api_reservation_create")
     * @param Request $request
     * @return Response
     */
    public function create(Request $request): Response
    {

        $content = json_decode($request->getContent());
//        dd($content);

        $room = $content->room;
        $adults = $content->adults;
        $childs = $content->childs;
        if(empty($room) || empty($adults) || empty($childs)){
            throw new NotFoundHttpException("Enter params please !");
        }
        $this->reservationRepository->addReservation($room, $adults, $childs);
        return new Response('Room '.$room.': '.$adults.' adults and '.$childs.' childs');
//        dd($reservation);
    }

}
