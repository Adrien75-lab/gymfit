<?php

namespace App\Repository;

use App\Entity\Exercises;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Exercises>
 *
 * @method Exercises|null find($id, $lockMode = null, $lockVersion = null)
 * @method Exercises|null findOneBy(array $criteria, array $orderBy = null)
 * @method Exercises[]    findAll()
 * @method Exercises[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ExercisesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Exercises::class);
    }

    public function save(Exercises $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Exercises $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }


// Cette méthode permet de récupérer les parties du corps
    public function findByParties(): array
    {
        $qb = $this->createQueryBuilder('e')
            ->select('DISTINCT e.partie')
            ->orderBy('e.partie', 'ASC');

        return $qb->getQuery()->getResult();
    }

}