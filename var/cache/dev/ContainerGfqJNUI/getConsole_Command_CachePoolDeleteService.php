<?php

namespace ContainerGfqJNUI;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class getConsole_Command_CachePoolDeleteService extends App_KernelDevDebugContainer
{
    /**
     * Gets the private 'console.command.cache_pool_delete' shared service.
     *
     * @return \Symfony\Bundle\FrameworkBundle\Command\CachePoolDeleteCommand
     */
    public static function do($container, $lazyLoad = true)
    {
        include_once \dirname(__DIR__, 4).'/vendor/symfony/console/Command/Command.php';
        include_once \dirname(__DIR__, 4).'/vendor/symfony/framework-bundle/Command/CachePoolDeleteCommand.php';

        $container->privates['console.command.cache_pool_delete'] = $instance = new \Symfony\Bundle\FrameworkBundle\Command\CachePoolDeleteCommand(($container->services['cache.global_clearer'] ?? $container->load('getCache_GlobalClearerService')), [0 => 'cache.app', 1 => 'cache.system', 2 => 'cache.validator', 3 => 'cache.serializer', 4 => 'cache.annotations', 5 => 'cache.property_info', 6 => 'cache.messenger.restart_workers_signal', 7 => 'cache.validator_expression_language', 8 => 'cache.doctrine.orm.default.result', 9 => 'cache.doctrine.orm.default.query', 10 => 'cache.security_expression_language', 11 => 'cache.webpack_encore', 12 => 'api_platform.cache.route_name_resolver', 13 => 'api_platform.cache.metadata.resource', 14 => 'api_platform.cache.metadata.resource.legacy', 15 => 'api_platform.cache.metadata.property.legacy', 16 => 'api_platform.cache.subresource_operation_factory', 17 => 'api_platform.cache.metadata.property', 18 => 'api_platform.cache.metadata.resource_collection', 19 => 'api_platform.cache.identifiers_extractor']);

        $instance->setName('cache:pool:delete');
        $instance->setDescription('Delete an item from a cache pool');

        return $instance;
    }
}
