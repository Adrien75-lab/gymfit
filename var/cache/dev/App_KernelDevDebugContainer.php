<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\ContainerGfqJNUI\App_KernelDevDebugContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/ContainerGfqJNUI/App_KernelDevDebugContainer.php') {
    touch(__DIR__.'/ContainerGfqJNUI.legacy');

    return;
}

if (!\class_exists(App_KernelDevDebugContainer::class, false)) {
    \class_alias(\ContainerGfqJNUI\App_KernelDevDebugContainer::class, App_KernelDevDebugContainer::class, false);
}

return new \ContainerGfqJNUI\App_KernelDevDebugContainer([
    'container.build_hash' => 'GfqJNUI',
    'container.build_id' => '8f7b0055',
    'container.build_time' => 1677168457,
], __DIR__.\DIRECTORY_SEPARATOR.'ContainerGfqJNUI');
