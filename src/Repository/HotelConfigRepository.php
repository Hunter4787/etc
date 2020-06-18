<?php

namespace App\Repository;

use App\Entity\HotelConfig;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method HotelConfig|null find($id, $lockMode = null, $lockVersion = null)
 * @method HotelConfig|null findOneBy(array $criteria, array $orderBy = null)
 * @method HotelConfig[]    findAll()
 * @method HotelConfig[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class HotelConfigRepository extends ServiceEntityRepository
{
    /**
     * @var ManagerRegistry
     */
    private $registry;
    /**
     * @var EntityManagerInterface
     */
    private $entityManager;

    public function __construct(ManagerRegistry $registry, EntityManagerInterface $entityManager)
    {
        parent::__construct($registry, HotelConfig::class);
        $this->registry = $registry;
        $this->entityManager = $entityManager;
    }

    public function addConfig($adultMinAge, $adultMaxAge, $childMinAge, $childMaxAge, $paxPerRoom, $roomsCount)
    {
        $config = new HotelConfig();

        $config->setPaxPerRoom($paxPerRoom);
        $config->getAdultMaxAge($adultMaxAge);
        $config->getAdultMinAge($adultMinAge);
        $config->setChildMinAge($childMinAge);
        $config->setChildMaxAge($childMaxAge);
        $config->setRoomsCount($roomsCount);

        $this->entityManager->persist($config);
        $this->entityManager->flush();
    }

    // /**
    //  * @return HotelConfig[] Returns an array of HotelConfig objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('h')
            ->andWhere('h.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('h.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?HotelConfig
    {
        return $this->createQueryBuilder('h')
            ->andWhere('h.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
