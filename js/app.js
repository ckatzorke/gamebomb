'use strict';


// Declare app level module which depends on filters, and services
var GameBomb = angular.module('GameBomb', ['ngGiantBomb', 'ngSanitize']).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/home.html',
                controller: 'HomeController'
            })
            .when('/config', {
                templateUrl: 'partials/config.html',
                controller: 'ConfigController'
            })
            .when('/addgame', {
                templateUrl: 'partials/addgame.html',
                controller: 'AddGameController'
            })
            .otherwise({redirectTo: '/'});
    }]);