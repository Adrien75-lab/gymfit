<?php

namespace ContainerGfqJNUI;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class getCustomersControllerService extends App_KernelDevDebugContainer
{
    /**
     * Gets the public 'App\Controller\CustomersController' shared autowired service.
     *
     * @return \App\Controller\CustomersController
     */
    public static function do($container, $lazyLoad = true)
    {
        include_once \dirname(__DIR__, 4).'/src/Controller/CustomersController.php';

        return $container->services['App\\Controller\\CustomersController'] = new \App\Controller\CustomersController();
    }
}