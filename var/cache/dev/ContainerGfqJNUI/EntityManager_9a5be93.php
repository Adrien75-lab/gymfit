<?php

namespace ContainerGfqJNUI;
include_once \dirname(__DIR__, 4).'/vendor/doctrine/persistence/src/Persistence/ObjectManager.php';
include_once \dirname(__DIR__, 4).'/vendor/doctrine/orm/lib/Doctrine/ORM/EntityManagerInterface.php';
include_once \dirname(__DIR__, 4).'/vendor/doctrine/orm/lib/Doctrine/ORM/EntityManager.php';

class EntityManager_9a5be93 extends \Doctrine\ORM\EntityManager implements \ProxyManager\Proxy\VirtualProxyInterface
{
    /**
     * @var \Doctrine\ORM\EntityManager|null wrapped object, if the proxy is initialized
     */
    private $valueHolder8d723 = null;

    /**
     * @var \Closure|null initializer responsible for generating the wrapped object
     */
    private $initializer4dc0c = null;

    /**
     * @var bool[] map of public properties of the parent class
     */
    private static $publicPropertiese01a2 = [
        
    ];

    public function getConnection()
    {
        $this->initializer4dc0c && ($this->initializer4dc0c->__invoke($valueHolder8d723, $this, 'getConnection', array(), $this->initializer4dc0c) || 1) && $this->valueHolder8d723 = $valueHolder8d723;

        return $this->valueHolder8d723->getConnection();
    }

    public function getMetadataFactory()
    {
        $this->initializer4dc0c && ($this->initializer4dc0c->__invoke($valueHolder8d723, $this, 'getMetadataFactory', array(), $this->initializer4dc0c) || 1) && $this->valueHolder8d723 = $valueHolder8d723;

        return $this->valueHolder8d723->getMetadataFactory();
    }

    public function getExpressionBuilder()
    {
        $this->initializer4dc0c && ($this->initializer4dc0c->__invoke($valueHolder8d723, $this, 'getExpressionBuilder', array(), $this->initializer4dc0c) || 1) && $this->valueHolder8d723 = $valueHolder8d723;

        return $this->valueHolder8d723->getExpressionBuilder();
    }

    public function beginTransaction()
    {
        $this->initializer4dc0c && ($this->initializer4dc0c->__invoke($valueHolder8d723, $this, 'beginTransaction', array(), $this->initializer4dc0c) || 1) && $this->valueHolder8d723 = $valueHolder8d723;

        return $this->valueHolder8d723->beginTransaction();
    }

    public function getCache()
    {
        $this->initializer4dc0c && ($this->initializer4dc0c->__invoke($valueHolder8d723, $this, 'getCache', array(), $this->initializer4dc0c) || 1) && $this->valueHolder8d723 = $valueHolder8d723;

        return $this->valueHolder8d723->getCache();
    }

    public function transactional($func)
    {
        $this->initializer4dc0c && ($this->initializer4dc0c->__invoke($valueHolder8d723, $this, 'transactional', array('func' => $func), $this->initializer4dc0c) || 1) && $this->valueHolder8d723 = $valueHolder8d723;

        return $this->valueHolder8d723->transactional($func);
    }

    public function wrapInTransaction(callable $func)
    {
        $this->initializer4dc0c && ($this->initializer4dc0c->__invoke($valueHolder8d723, $this, 'wrapInTransaction', array('func' => $func), $this->initializer4dc0c) || 1) && $this->valueHolder8d723 = $valueHolder8d723;

        return $this->valueHolder8d723->wrapInTransaction($func);
    }

    public function commit()
    {
        $this->initializer4dc0c && ($this->initializer4dc0c->__invoke($valueHolder8d723, $this, 'commit', array(), $this->initializer4dc0c) || 1) && $this->valueHolder8d723 = $valueHolder8d723;

        return $this->valueHolder8d723->commit();
    }

    public function rollback()
    {
        $this->initializer4dc0c && ($this->initializer4dc0c->__invoke($valueHolder8d723, $this, 'rollback', array(), $this->initializer4dc0c) || 1) && $this->valueHolder8d723 = $valueHolder8d723;

        return $this->valueHolder8d723->rollback();
    }

    public function getClassMetadata($className)
    {
        $this->initializer4dc0c && ($this->initializer4dc0c->__invoke($valueHolder8d723, $this, 'getClassMetadata', array('className' => $className), $this->initializer4dc0c) || 1) && $this->valueHolder8d723 = $valueHolder8d723;

        return $this->valueHolder8d723->getClassMetadata($className);
    }

    public function createQuery($dql = '')
    {
        $this->initializer4dc0c && ($this->initializer4dc0c->__invoke($valueHolder8d723, $this, 'createQuery', array('dql' => $dql), $this->initializer4dc0c) || 1) && $this->valueHolder8d723 = $valueHolder8d723;

        return $this->valueHolder8d723->createQuery($dql);
    }

    public function createNamedQuery($name)
    {
        $this->initializer4dc0c && ($this->initializer4dc0c->__invoke($valueHolder8d723, $this, 'createNamedQuery', array('name' => $name), $this->initializer4dc0c) || 1) && $this->valueHolder8d723 = $valueHolder8d723;

        return $this->valueHolder8d723->createNamedQuery($name);
    }

    public function createNativeQuery($sql, \Doctrine\ORM\Query\ResultSetMapping $rsm)
    {
        $this->initializer4dc0c && ($this->initializer4dc0c->__invoke($valueHolder8d723, $this, 'createNativeQuery', array('sql' => $sql, 'rsm' => $rsm), $this->initializer4dc0c) || 1) && $this->valueHolder8d723 = $valueHolder8d723;

        return $this->valueHolder8d723->createNativeQuery($sql, $rsm);
    }

    public function createNamedNativeQuery($name)
    {
        $this->initializer4dc0c && ($this->initializer4dc0c->__invoke($valueHolder8d723, $this, 'createNamedNativeQuery', array('name' => $name), $this->initializer4dc0c) || 1) && $this->valueHolder8d723 = $valueHolder8d723;

        return $this->valueHolder8d723->createNamedNativeQuery($name);
    }

    public function createQueryBuilder()
    {
        $this->initializer4dc0c && ($this->initializer4dc0c->__invoke($valueHolder8d723, $this, 'createQueryBuilder', array(), $this->initializer4dc0c) || 1) && $this->valueHolder8d723 = $valueHolder8d723;

        return $this->valueHolder8d723->createQueryBuilder();
    }

    public function flush($entity = null)
    {
        $this->initializer4dc0c && ($this->initializer4dc0c->__invoke($valueHolder8d723, $this, 'flush', array('entity' => $entity), $this->initializer4dc0c) || 1) && $this->valueHolder8d723 = $valueHolder8d723;

        return $this->valueHolder8d723->flush($entity);
    }

    public function find($className, $id, $lockMode = null, $lockVersion = null)
    {
        $this->initializer4dc0c && ($this->initializer4dc0c->__invoke($valueHolder8d723, $this, 'find', array('className' => $className, 'id' => $id, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializer4dc0c) || 1) && $this->valueHolder8d723 = $valueHolder8d723;

        return $this->valueHolder8d723->find($className, $id, $lockMode, $lockVersion);
    }

    public function getReference($entityName, $id)
    {
        $this->initializer4dc0c && ($this->initializer4dc0c->__invoke($valueHolder8d723, $this, 'getReference', array('entityName' => $entityName, 'id' => $id), $this->initializer4dc0c) || 1) && $this->valueHolder8d723 = $valueHolder8d723;

        return $this->valueHolder8d723->getReference($entityName, $id);
    }

    public function getPartialReference($entityName, $identifier)
    {
        $this->initializer4dc0c && ($this->initializer4dc0c->__invoke($valueHolder8d723, $this, 'getPartialReference', array('entityName' => $entityName, 'identifier' => $identifier), $this->initializer4dc0c) || 1) && $this->valueHolder8d723 = $valueHolder8d723;

        return $this->valueHolder8d723->getPartialReference($entityName, $identifier);
    }

    public function clear($entityName = null)
    {
        $this->initializer4dc0c && ($this->initializer4dc0c->__invoke($valueHolder8d723, $this, 'clear', array('entityName' => $entityName), $this->initializer4dc0c) || 1) && $this->valueHolder8d723 = $valueHolder8d723;

        return $this->valueHolder8d723->clear($entityName);
    }

    public function close()
    {
        $this->initializer4dc0c && ($this->initializer4dc0c->__invoke($valueHolder8d723, $this, 'close', array(), $this->initializer4dc0c) || 1) && $this->valueHolder8d723 = $valueHolder8d723;

        return $this->valueHolder8d723->close();
    }

    public function persist($entity)
    {
        $this->initializer4dc0c && ($this->initializer4dc0c->__invoke($valueHolder8d723, $this, 'persist', array('entity' => $entity), $this->initializer4dc0c) || 1) && $this->valueHolder8d723 = $valueHolder8d723;

        return $this->valueHolder8d723->persist($entity);
    }

    public function remove($entity)
    {
        $this->initializer4dc0c && ($this->initializer4dc0c->__invoke($valueHolder8d723, $this, 'remove', array('entity' => $entity), $this->initializer4dc0c) || 1) && $this->valueHolder8d723 = $valueHolder8d723;

        return $this->valueHolder8d723->remove($entity);
    }

    public function refresh($entity, ?int $lockMode = null)
    {
        $this->initializer4dc0c && ($this->initializer4dc0c->__invoke($valueHolder8d723, $this, 'refresh', array('entity' => $entity, 'lockMode' => $lockMode), $this->initializer4dc0c) || 1) && $this->valueHolder8d723 = $valueHolder8d723;

        return $this->valueHolder8d723->refresh($entity, $lockMode);
    }

    public function detach($entity)
    {
        $this->initializer4dc0c && ($this->initializer4dc0c->__invoke($valueHolder8d723, $this, 'detach', array('entity' => $entity), $this->initializer4dc0c) || 1) && $this->valueHolder8d723 = $valueHolder8d723;

        return $this->valueHolder8d723->detach($entity);
    }

    public function merge($entity)
    {
        $this->initializer4dc0c && ($this->initializer4dc0c->__invoke($valueHolder8d723, $this, 'merge', array('entity' => $entity), $this->initializer4dc0c) || 1) && $this->valueHolder8d723 = $valueHolder8d723;

        return $this->valueHolder8d723->merge($entity);
    }

    public function copy($entity, $deep = false)
    {
        $this->initializer4dc0c && ($this->initializer4dc0c->__invoke($valueHolder8d723, $this, 'copy', array('entity' => $entity, 'deep' => $deep), $this->initializer4dc0c) || 1) && $this->valueHolder8d723 = $valueHolder8d723;

        return $this->valueHolder8d723->copy($entity, $deep);
    }

    public function lock($entity, $lockMode, $lockVersion = null)
    {
        $this->initializer4dc0c && ($this->initializer4dc0c->__invoke($valueHolder8d723, $this, 'lock', array('entity' => $entity, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializer4dc0c) || 1) && $this->valueHolder8d723 = $valueHolder8d723;

        return $this->valueHolder8d723->lock($entity, $lockMode, $lockVersion);
    }

    public function getRepository($entityName)
    {
        $this->initializer4dc0c && ($this->initializer4dc0c->__invoke($valueHolder8d723, $this, 'getRepository', array('entityName' => $entityName), $this->initializer4dc0c) || 1) && $this->valueHolder8d723 = $valueHolder8d723;

        return $this->valueHolder8d723->getRepository($entityName);
    }

    public function contains($entity)
    {
        $this->initializer4dc0c && ($this->initializer4dc0c->__invoke($valueHolder8d723, $this, 'contains', array('entity' => $entity), $this->initializer4dc0c) || 1) && $this->valueHolder8d723 = $valueHolder8d723;

        return $this->valueHolder8d723->contains($entity);
    }

    public function getEventManager()
    {
        $this->initializer4dc0c && ($this->initializer4dc0c->__invoke($valueHolder8d723, $this, 'getEventManager', array(), $this->initializer4dc0c) || 1) && $this->valueHolder8d723 = $valueHolder8d723;

        return $this->valueHolder8d723->getEventManager();
    }

    public function getConfiguration()
    {
        $this->initializer4dc0c && ($this->initializer4dc0c->__invoke($valueHolder8d723, $this, 'getConfiguration', array(), $this->initializer4dc0c) || 1) && $this->valueHolder8d723 = $valueHolder8d723;

        return $this->valueHolder8d723->getConfiguration();
    }

    public function isOpen()
    {
        $this->initializer4dc0c && ($this->initializer4dc0c->__invoke($valueHolder8d723, $this, 'isOpen', array(), $this->initializer4dc0c) || 1) && $this->valueHolder8d723 = $valueHolder8d723;

        return $this->valueHolder8d723->isOpen();
    }

    public function getUnitOfWork()
    {
        $this->initializer4dc0c && ($this->initializer4dc0c->__invoke($valueHolder8d723, $this, 'getUnitOfWork', array(), $this->initializer4dc0c) || 1) && $this->valueHolder8d723 = $valueHolder8d723;

        return $this->valueHolder8d723->getUnitOfWork();
    }

    public function getHydrator($hydrationMode)
    {
        $this->initializer4dc0c && ($this->initializer4dc0c->__invoke($valueHolder8d723, $this, 'getHydrator', array('hydrationMode' => $hydrationMode), $this->initializer4dc0c) || 1) && $this->valueHolder8d723 = $valueHolder8d723;

        return $this->valueHolder8d723->getHydrator($hydrationMode);
    }

    public function newHydrator($hydrationMode)
    {
        $this->initializer4dc0c && ($this->initializer4dc0c->__invoke($valueHolder8d723, $this, 'newHydrator', array('hydrationMode' => $hydrationMode), $this->initializer4dc0c) || 1) && $this->valueHolder8d723 = $valueHolder8d723;

        return $this->valueHolder8d723->newHydrator($hydrationMode);
    }

    public function getProxyFactory()
    {
        $this->initializer4dc0c && ($this->initializer4dc0c->__invoke($valueHolder8d723, $this, 'getProxyFactory', array(), $this->initializer4dc0c) || 1) && $this->valueHolder8d723 = $valueHolder8d723;

        return $this->valueHolder8d723->getProxyFactory();
    }

    public function initializeObject($obj)
    {
        $this->initializer4dc0c && ($this->initializer4dc0c->__invoke($valueHolder8d723, $this, 'initializeObject', array('obj' => $obj), $this->initializer4dc0c) || 1) && $this->valueHolder8d723 = $valueHolder8d723;

        return $this->valueHolder8d723->initializeObject($obj);
    }

    public function getFilters()
    {
        $this->initializer4dc0c && ($this->initializer4dc0c->__invoke($valueHolder8d723, $this, 'getFilters', array(), $this->initializer4dc0c) || 1) && $this->valueHolder8d723 = $valueHolder8d723;

        return $this->valueHolder8d723->getFilters();
    }

    public function isFiltersStateClean()
    {
        $this->initializer4dc0c && ($this->initializer4dc0c->__invoke($valueHolder8d723, $this, 'isFiltersStateClean', array(), $this->initializer4dc0c) || 1) && $this->valueHolder8d723 = $valueHolder8d723;

        return $this->valueHolder8d723->isFiltersStateClean();
    }

    public function hasFilters()
    {
        $this->initializer4dc0c && ($this->initializer4dc0c->__invoke($valueHolder8d723, $this, 'hasFilters', array(), $this->initializer4dc0c) || 1) && $this->valueHolder8d723 = $valueHolder8d723;

        return $this->valueHolder8d723->hasFilters();
    }

    /**
     * Constructor for lazy initialization
     *
     * @param \Closure|null $initializer
     */
    public static function staticProxyConstructor($initializer)
    {
        static $reflection;

        $reflection = $reflection ?? new \ReflectionClass(__CLASS__);
        $instance   = $reflection->newInstanceWithoutConstructor();

        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $instance, 'Doctrine\\ORM\\EntityManager')->__invoke($instance);

        $instance->initializer4dc0c = $initializer;

        return $instance;
    }

    public function __construct(\Doctrine\DBAL\Connection $conn, \Doctrine\ORM\Configuration $config, ?\Doctrine\Common\EventManager $eventManager = null)
    {
        static $reflection;

        if (! $this->valueHolder8d723) {
            $reflection = $reflection ?? new \ReflectionClass('Doctrine\\ORM\\EntityManager');
            $this->valueHolder8d723 = $reflection->newInstanceWithoutConstructor();
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);

        }

        $this->valueHolder8d723->__construct($conn, $config, $eventManager);
    }

    public function & __get($name)
    {
        $this->initializer4dc0c && ($this->initializer4dc0c->__invoke($valueHolder8d723, $this, '__get', ['name' => $name], $this->initializer4dc0c) || 1) && $this->valueHolder8d723 = $valueHolder8d723;

        if (isset(self::$publicPropertiese01a2[$name])) {
            return $this->valueHolder8d723->$name;
        }

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder8d723;

            $backtrace = debug_backtrace(false, 1);
            trigger_error(
                sprintf(
                    'Undefined property: %s::$%s in %s on line %s',
                    $realInstanceReflection->getName(),
                    $name,
                    $backtrace[0]['file'],
                    $backtrace[0]['line']
                ),
                \E_USER_NOTICE
            );
            return $targetObject->$name;
        }

        $targetObject = $this->valueHolder8d723;
        $accessor = function & () use ($targetObject, $name) {
            return $targetObject->$name;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = & $accessor();

        return $returnValue;
    }

    public function __set($name, $value)
    {
        $this->initializer4dc0c && ($this->initializer4dc0c->__invoke($valueHolder8d723, $this, '__set', array('name' => $name, 'value' => $value), $this->initializer4dc0c) || 1) && $this->valueHolder8d723 = $valueHolder8d723;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder8d723;

            $targetObject->$name = $value;

            return $targetObject->$name;
        }

        $targetObject = $this->valueHolder8d723;
        $accessor = function & () use ($targetObject, $name, $value) {
            $targetObject->$name = $value;

            return $targetObject->$name;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = & $accessor();

        return $returnValue;
    }

    public function __isset($name)
    {
        $this->initializer4dc0c && ($this->initializer4dc0c->__invoke($valueHolder8d723, $this, '__isset', array('name' => $name), $this->initializer4dc0c) || 1) && $this->valueHolder8d723 = $valueHolder8d723;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder8d723;

            return isset($targetObject->$name);
        }

        $targetObject = $this->valueHolder8d723;
        $accessor = function () use ($targetObject, $name) {
            return isset($targetObject->$name);
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = $accessor();

        return $returnValue;
    }

    public function __unset($name)
    {
        $this->initializer4dc0c && ($this->initializer4dc0c->__invoke($valueHolder8d723, $this, '__unset', array('name' => $name), $this->initializer4dc0c) || 1) && $this->valueHolder8d723 = $valueHolder8d723;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder8d723;

            unset($targetObject->$name);

            return;
        }

        $targetObject = $this->valueHolder8d723;
        $accessor = function () use ($targetObject, $name) {
            unset($targetObject->$name);

            return;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $accessor();
    }

    public function __clone()
    {
        $this->initializer4dc0c && ($this->initializer4dc0c->__invoke($valueHolder8d723, $this, '__clone', array(), $this->initializer4dc0c) || 1) && $this->valueHolder8d723 = $valueHolder8d723;

        $this->valueHolder8d723 = clone $this->valueHolder8d723;
    }

    public function __sleep()
    {
        $this->initializer4dc0c && ($this->initializer4dc0c->__invoke($valueHolder8d723, $this, '__sleep', array(), $this->initializer4dc0c) || 1) && $this->valueHolder8d723 = $valueHolder8d723;

        return array('valueHolder8d723');
    }

    public function __wakeup()
    {
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);
    }

    public function setProxyInitializer(\Closure $initializer = null) : void
    {
        $this->initializer4dc0c = $initializer;
    }

    public function getProxyInitializer() : ?\Closure
    {
        return $this->initializer4dc0c;
    }

    public function initializeProxy() : bool
    {
        return $this->initializer4dc0c && ($this->initializer4dc0c->__invoke($valueHolder8d723, $this, 'initializeProxy', array(), $this->initializer4dc0c) || 1) && $this->valueHolder8d723 = $valueHolder8d723;
    }

    public function isProxyInitialized() : bool
    {
        return null !== $this->valueHolder8d723;
    }

    public function getWrappedValueHolderValue()
    {
        return $this->valueHolder8d723;
    }
}

if (!\class_exists('EntityManager_9a5be93', false)) {
    \class_alias(__NAMESPACE__.'\\EntityManager_9a5be93', 'EntityManager_9a5be93', false);
}
