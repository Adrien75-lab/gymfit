<?php

namespace App\Repository;

use App\Entity\WorkoutExercises;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<WorkoutExercises>
 *
 * @method WorkoutExercises|null find($id, $lockMode = null, $lockVersion = null)
 * @method WorkoutExercises|null findOneBy(array $criteria, array $orderBy = null)
 * @method WorkoutExercises[]    findAll()
 * @method WorkoutExercises[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class WorkoutExercisesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, WorkoutExercises::class);
    }

    public function save(WorkoutExercises $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(WorkoutExercises $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return WorkoutExercises[] Returns an array of WorkoutExercises objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('w')
//            ->andWhere('w.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('w.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?WorkoutExercises
//    {
//        return $this->createQueryBuilder('w')
//            ->andWhere('w.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
