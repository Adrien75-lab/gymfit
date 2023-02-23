<?php

/**
 * This file has been auto-generated
 * by the Symfony Routing Component.
 */

return [
    false, // $matchHost
    [ // $staticRoutes
        '/_profiler' => [[['_route' => '_profiler_home', '_controller' => 'web_profiler.controller.profiler::homeAction'], null, null, null, true, false, null]],
        '/_profiler/search' => [[['_route' => '_profiler_search', '_controller' => 'web_profiler.controller.profiler::searchAction'], null, null, null, false, false, null]],
        '/_profiler/search_bar' => [[['_route' => '_profiler_search_bar', '_controller' => 'web_profiler.controller.profiler::searchBarAction'], null, null, null, false, false, null]],
        '/_profiler/phpinfo' => [[['_route' => '_profiler_phpinfo', '_controller' => 'web_profiler.controller.profiler::phpinfoAction'], null, null, null, false, false, null]],
        '/_profiler/open' => [[['_route' => '_profiler_open_file', '_controller' => 'web_profiler.controller.profiler::openAction'], null, null, null, false, false, null]],
        '/' => [[['_route' => 'app', '_controller' => 'App\\Controller\\AppController::index'], null, null, null, false, false, null]],
        '/bodypart' => [[['_route' => 'bodypart_list', '_controller' => 'App\\Controller\\BodyPartController::listExercises'], null, null, null, false, false, null]],
        '/api/login_check' => [[['_route' => 'api_login_check'], null, null, null, false, false, null]],
    ],
    [ // $regexpList
        0 => '{^(?'
                .'|/api(?'
                    .'|/\\.well\\-known/genid/([^/]++)(*:43)'
                    .'|(?:/(index)(?:\\.([^/]++))?)?(*:78)'
                    .'|/(?'
                        .'|docs(?:\\.([^/]++))?(*:108)'
                        .'|co(?'
                            .'|ntexts/([^.]+)(?:\\.(jsonld))?(*:150)'
                            .'|aches/(\\d+)/members(*:177)'
                        .')'
                        .'|exercises(?'
                            .'|/([^/\\.]++)(?:\\.([^/]++))?(*:224)'
                            .'|(?:\\.([^/]++))?(?'
                                .'|(*:250)'
                            .')'
                            .'|/([^/\\.]++)(?:\\.([^/]++))?(?'
                                .'|(*:288)'
                            .')'
                        .')'
                        .'|partie_corps(?'
                            .'|/([^/\\.]++)(?:\\.([^/]++))?(*:339)'
                            .'|(?:\\.([^/]++))?(?'
                                .'|(*:365)'
                            .')'
                            .'|/([^/\\.]++)(?:\\.([^/]++))?(?'
                                .'|(*:403)'
                            .')'
                        .')'
                        .'|users(?'
                            .'|/([^/\\.]++)(?:\\.([^/]++))?(*:447)'
                            .'|(?:\\.([^/]++))?(?'
                                .'|(*:473)'
                            .')'
                            .'|/([^/\\.]++)(?:\\.([^/]++))?(?'
                                .'|(*:511)'
                            .')'
                        .')'
                        .'|workouts(?'
                            .'|/([^/\\.]++)(?:\\.([^/]++))?(*:558)'
                            .'|(?:\\.([^/]++))?(?'
                                .'|(*:584)'
                            .')'
                            .'|/([^/\\.]++)(?:\\.([^/]++))?(?'
                                .'|(*:622)'
                            .')'
                        .')'
                    .')'
                .')'
                .'|/_(?'
                    .'|error/(\\d+)(?:\\.([^/]++))?(*:665)'
                    .'|wdt/([^/]++)(*:685)'
                    .'|profiler/([^/]++)(?'
                        .'|/(?'
                            .'|search/results(*:731)'
                            .'|router(*:745)'
                            .'|exception(?'
                                .'|(*:765)'
                                .'|\\.css(*:778)'
                            .')'
                        .')'
                        .'|(*:788)'
                    .')'
                .')'
                .'|/customers/([^/]++)(*:817)'
            .')/?$}sDu',
    ],
    [ // $dynamicRoutes
        43 => [[['_route' => 'api_genid', '_controller' => 'api_platform.action.not_exposed', '_api_respond' => 'true', 'pagination_enabled' => false], ['id'], null, null, false, true, null]],
        78 => [[['_route' => 'api_entrypoint', '_controller' => 'api_platform.action.entrypoint', '_format' => '', '_api_respond' => 'true', 'index' => 'index', 'pagination_enabled' => false], ['index', '_format'], null, null, false, true, null]],
        108 => [[['_route' => 'api_doc', '_controller' => 'api_platform.action.documentation', '_format' => '', '_api_respond' => 'true', 'pagination_enabled' => false], ['_format'], null, null, false, true, null]],
        150 => [[['_route' => 'api_jsonld_context', '_controller' => 'api_platform.jsonld.action.context', '_format' => 'jsonld', '_api_respond' => 'true', 'pagination_enabled' => false], ['shortName', '_format'], null, null, false, true, null]],
        177 => [[['_route' => 'app_member_getmembers', '_controller' => 'App\\Controller\\MemberController::getMembers'], ['id'], ['GET' => 0], null, true, false, null]],
        224 => [[['_route' => '_api_/exercises/{id}.{_format}_get', '_controller' => 'api_platform.action.placeholder', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Entity\\Exercises', '_api_operation_name' => '_api_/exercises/{id}.{_format}_get', 'pagination_enabled' => false], ['id', '_format'], ['GET' => 0], null, false, true, null]],
        250 => [
            [['_route' => '_api_/exercises.{_format}_get_collection', '_controller' => 'api_platform.action.placeholder', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Entity\\Exercises', '_api_operation_name' => '_api_/exercises.{_format}_get_collection', 'pagination_enabled' => false], ['_format'], ['GET' => 0], null, false, true, null],
            [['_route' => '_api_/exercises.{_format}_post', '_controller' => 'api_platform.action.placeholder', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Entity\\Exercises', '_api_operation_name' => '_api_/exercises.{_format}_post', 'pagination_enabled' => false], ['_format'], ['POST' => 0], null, false, true, null],
        ],
        288 => [
            [['_route' => '_api_/exercises/{id}.{_format}_put', '_controller' => 'api_platform.action.placeholder', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Entity\\Exercises', '_api_operation_name' => '_api_/exercises/{id}.{_format}_put', 'pagination_enabled' => false], ['id', '_format'], ['PUT' => 0], null, false, true, null],
            [['_route' => '_api_/exercises/{id}.{_format}_patch', '_controller' => 'api_platform.action.placeholder', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Entity\\Exercises', '_api_operation_name' => '_api_/exercises/{id}.{_format}_patch', 'pagination_enabled' => false], ['id', '_format'], ['PATCH' => 0], null, false, true, null],
            [['_route' => '_api_/exercises/{id}.{_format}_delete', '_controller' => 'api_platform.action.placeholder', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Entity\\Exercises', '_api_operation_name' => '_api_/exercises/{id}.{_format}_delete', 'pagination_enabled' => false], ['id', '_format'], ['DELETE' => 0], null, false, true, null],
        ],
        339 => [[['_route' => '_api_/partie_corps/{id}.{_format}_get', '_controller' => 'api_platform.action.placeholder', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Entity\\PartieCorps', '_api_operation_name' => '_api_/partie_corps/{id}.{_format}_get', 'pagination_enabled' => false], ['id', '_format'], ['GET' => 0], null, false, true, null]],
        365 => [
            [['_route' => '_api_/partie_corps.{_format}_get_collection', '_controller' => 'api_platform.action.placeholder', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Entity\\PartieCorps', '_api_operation_name' => '_api_/partie_corps.{_format}_get_collection', 'pagination_enabled' => false], ['_format'], ['GET' => 0], null, false, true, null],
            [['_route' => '_api_/partie_corps.{_format}_post', '_controller' => 'api_platform.action.placeholder', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Entity\\PartieCorps', '_api_operation_name' => '_api_/partie_corps.{_format}_post', 'pagination_enabled' => false], ['_format'], ['POST' => 0], null, false, true, null],
        ],
        403 => [
            [['_route' => '_api_/partie_corps/{id}.{_format}_put', '_controller' => 'api_platform.action.placeholder', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Entity\\PartieCorps', '_api_operation_name' => '_api_/partie_corps/{id}.{_format}_put', 'pagination_enabled' => false], ['id', '_format'], ['PUT' => 0], null, false, true, null],
            [['_route' => '_api_/partie_corps/{id}.{_format}_patch', '_controller' => 'api_platform.action.placeholder', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Entity\\PartieCorps', '_api_operation_name' => '_api_/partie_corps/{id}.{_format}_patch', 'pagination_enabled' => false], ['id', '_format'], ['PATCH' => 0], null, false, true, null],
            [['_route' => '_api_/partie_corps/{id}.{_format}_delete', '_controller' => 'api_platform.action.placeholder', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Entity\\PartieCorps', '_api_operation_name' => '_api_/partie_corps/{id}.{_format}_delete', 'pagination_enabled' => false], ['id', '_format'], ['DELETE' => 0], null, false, true, null],
        ],
        447 => [[['_route' => '_api_/users/{id}.{_format}_get', '_controller' => 'api_platform.action.placeholder', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Entity\\User', '_api_operation_name' => '_api_/users/{id}.{_format}_get', 'pagination_enabled' => false], ['id', '_format'], ['GET' => 0], null, false, true, null]],
        473 => [
            [['_route' => '_api_/users.{_format}_get_collection', '_controller' => 'api_platform.action.placeholder', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Entity\\User', '_api_operation_name' => '_api_/users.{_format}_get_collection', 'pagination_enabled' => false], ['_format'], ['GET' => 0], null, false, true, null],
            [['_route' => '_api_/users.{_format}_post', '_controller' => 'api_platform.action.placeholder', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Entity\\User', '_api_operation_name' => '_api_/users.{_format}_post', 'pagination_enabled' => false], ['_format'], ['POST' => 0], null, false, true, null],
        ],
        511 => [
            [['_route' => '_api_/users/{id}.{_format}_put', '_controller' => 'api_platform.action.placeholder', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Entity\\User', '_api_operation_name' => '_api_/users/{id}.{_format}_put', 'pagination_enabled' => false], ['id', '_format'], ['PUT' => 0], null, false, true, null],
            [['_route' => '_api_/users/{id}.{_format}_patch', '_controller' => 'api_platform.action.placeholder', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Entity\\User', '_api_operation_name' => '_api_/users/{id}.{_format}_patch', 'pagination_enabled' => false], ['id', '_format'], ['PATCH' => 0], null, false, true, null],
            [['_route' => '_api_/users/{id}.{_format}_delete', '_controller' => 'api_platform.action.placeholder', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Entity\\User', '_api_operation_name' => '_api_/users/{id}.{_format}_delete', 'pagination_enabled' => false], ['id', '_format'], ['DELETE' => 0], null, false, true, null],
        ],
        558 => [[['_route' => '_api_/workouts/{id}.{_format}_get', '_controller' => 'api_platform.action.placeholder', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Entity\\Workout', '_api_operation_name' => '_api_/workouts/{id}.{_format}_get', 'pagination_enabled' => false], ['id', '_format'], ['GET' => 0], null, false, true, null]],
        584 => [
            [['_route' => '_api_/workouts.{_format}_get_collection', '_controller' => 'api_platform.action.placeholder', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Entity\\Workout', '_api_operation_name' => '_api_/workouts.{_format}_get_collection', 'pagination_enabled' => false], ['_format'], ['GET' => 0], null, false, true, null],
            [['_route' => '_api_/workouts.{_format}_post', '_controller' => 'api_platform.action.placeholder', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Entity\\Workout', '_api_operation_name' => '_api_/workouts.{_format}_post', 'pagination_enabled' => false], ['_format'], ['POST' => 0], null, false, true, null],
        ],
        622 => [
            [['_route' => '_api_/workouts/{id}.{_format}_put', '_controller' => 'api_platform.action.placeholder', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Entity\\Workout', '_api_operation_name' => '_api_/workouts/{id}.{_format}_put', 'pagination_enabled' => false], ['id', '_format'], ['PUT' => 0], null, false, true, null],
            [['_route' => '_api_/workouts/{id}.{_format}_patch', '_controller' => 'api_platform.action.placeholder', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Entity\\Workout', '_api_operation_name' => '_api_/workouts/{id}.{_format}_patch', 'pagination_enabled' => false], ['id', '_format'], ['PATCH' => 0], null, false, true, null],
            [['_route' => '_api_/workouts/{id}.{_format}_delete', '_controller' => 'api_platform.action.placeholder', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Entity\\Workout', '_api_operation_name' => '_api_/workouts/{id}.{_format}_delete', 'pagination_enabled' => false], ['id', '_format'], ['DELETE' => 0], null, false, true, null],
        ],
        665 => [[['_route' => '_preview_error', '_controller' => 'error_controller::preview', '_format' => 'html'], ['code', '_format'], null, null, false, true, null]],
        685 => [[['_route' => '_wdt', '_controller' => 'web_profiler.controller.profiler::toolbarAction'], ['token'], null, null, false, true, null]],
        731 => [[['_route' => '_profiler_search_results', '_controller' => 'web_profiler.controller.profiler::searchResultsAction'], ['token'], null, null, false, false, null]],
        745 => [[['_route' => '_profiler_router', '_controller' => 'web_profiler.controller.router::panelAction'], ['token'], null, null, false, false, null]],
        765 => [[['_route' => '_profiler_exception', '_controller' => 'web_profiler.controller.exception_panel::body'], ['token'], null, null, false, false, null]],
        778 => [[['_route' => '_profiler_exception_css', '_controller' => 'web_profiler.controller.exception_panel::stylesheet'], ['token'], null, null, false, false, null]],
        788 => [[['_route' => '_profiler', '_controller' => 'web_profiler.controller.profiler::panelAction'], ['token'], null, null, false, true, null]],
        817 => [
            [['_route' => 'customers', '_controller' => 'App\\Controller\\CustomersController::show'], ['id'], null, null, false, true, null],
            [null, null, null, null, false, false, 0],
        ],
    ],
    null, // $checkCondition
];
