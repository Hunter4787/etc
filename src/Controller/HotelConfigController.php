<?php

namespace App\Controller;


use App\Repository\HotelConfigRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Routing\Annotation\Route;

    /**
     * @Route("/api/config", name="api_hotel_config")
     */
class HotelConfigController extends AbstractController
{
    private $configRepository;

    public  function __construct(HotelConfigRepository $configRepository)
    {

        $this->configRepository = $configRepository;
    }


    /**
     * @Route("/read", name="api_config_read")
     */

    public function read()
    {
        $configs = $this->HotelConfigRepository->findAll();
        $arrayOfConfigs = [];

        foreach ($configs as $config) {
            $arrayOfConfigs[] = $config->toArray();
        }

        return $this->json($arrayOfConfigs);
    }

    /**
     * @Route("/create", name="api_config_create")
     * @param Request $request
     * @return Response
     */
    public function create(Request $request): Response
    {

        $content = json_decode($request->getContent());
//        dd($content);

        $adultMinAge = $content->adultMinAge;
        $adultMaxAge = $content->adultMaxAge;
        $childMinAge = $content->childMinAge;
        $childMaxAge = $content->childMaxAge;
        $paxPerRoom = $content->paxPerRoom;
        $roomsCount = $content->roomsCount;

        if(empty($adultMinAge) || empty($adultMaxAge) || empty($childMinAge)
            || empty($childMaxAge) || empty($paxPerRoom) || empty($roomsCount)){
            throw new NotFoundHttpException("Enter params please !");
        }
        $this->configRepository->addConfig($adultMinAge, $adultMaxAge, $childMinAge, $childMaxAge, $paxPerRoom, $roomsCount);
        return new Response('config created');
//        dd($reservation);
    }


}
