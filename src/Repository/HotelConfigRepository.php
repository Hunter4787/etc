<?php

namespace App\Repository;

use App\Entity\HotelConfig;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method HotelConfig|null find($id, $lockMode = null, $lockVersion = null)
 * @method HotelConfig|null findOneBy(array $criteria, array $orderBy = null)
 * @method HotelConfig[]    findAll()
 * @method HotelConfig[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class HotelConfigRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, HotelConfig::class);
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
