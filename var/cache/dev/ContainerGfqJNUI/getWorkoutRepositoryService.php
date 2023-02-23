<?php

namespace ContainerGfqJNUI;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class getWorkoutRepositoryService extends App_KernelDevDebugContainer
{
    /**
     * Gets the public 'App\Repository\WorkoutRepository' shared autowired service.
     *
     * @return \App\Repository\WorkoutRepository
     */
    public static function do($container, $lazyLoad = true)
    {
        include_once \dirname(__DIR__, 4).'/vendor/doctrine/persistence/src/Persistence/ObjectRepository.php';
        include_once \dirname(__DIR__, 4).'/vendor/doctrine/collections/src/Selectable.php';
        include_once \dirname(__DIR__, 4).'/vendor/doctrine/orm/lib/Doctrine/ORM/EntityRepository.php';
        include_once \dirname(__DIR__, 4).'/vendor/doctrine/doctrine-bundle/Repository/ServiceEntityRepositoryInterface.php';
        include_once \dirname(__DIR__, 4).'/vendor/doctrine/doctrine-bundle/Repository/ServiceEntityRepository.php';
        include_once \dirname(__DIR__, 4).'/src/Repository/WorkoutRepository.php';

        return $container->services['App\\Repository\\WorkoutRepository'] = new \App\Repository\WorkoutRepository(($container->services['doctrine'] ?? $container->getDoctrineService()));
    }
}
