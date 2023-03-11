<?php

namespace App\Repository;

use App\Entity\Coach;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use App\Entity\User;


/**
 * @extends ServiceEntityRepository<Coach>
 *
 * @method Coach|null find($id, $lockMode = null, $lockVersion = null)
 * @method Coach|null findOneBy(array $criteria, array $orderBy = null)
 * @method Coach[]    findAll()
 * @method Coach[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CoachRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Coach::class);
    }

    public function save(Coach $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Coach $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function findByUserRole(string $role)
    {
        $qb = $this->getEntityManager()
            ->createQueryBuilder()
            ->select('u')
            ->from('App\Entity\User', 'u')
            ->where('u.roles LIKE :role')
            ->setParameter('role', "%\"$role\"%");

        $users = $qb->getQuery()->getResult();

        $entityManager = $this->getEntityManager();
        $coaches = [];
        foreach ($users as $user) {
            $coach = $this->findOneBy(['user' => $user]);
            if (!$coach) {
                $coach = new Coach();
                $coach->hydrate($user);
                // set other properties if necessary
                $entityManager->persist($coach);
            } else {
                // The coach already exists, so update the last name
                $coach->setLastName($user->getLastName());
            }
            $coaches[] = $coach;
        }

        $entityManager->flush();

        return $coaches;
    }
   
    public function getBookings(Coach $coach): array
    {
        return $this->getEntityManager()
            ->getRepository(Booking::class)
            ->findBy(['coach' => $coach]);
    }
    

    //    /**
    //     * @return Coach[] Returns an array of Coach objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('c')
    //            ->andWhere('c.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('c.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?Coach
    //    {
    //        return $this->createQueryBuilder('c')
    //            ->andWhere('c.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
