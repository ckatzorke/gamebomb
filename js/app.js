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
                controller: 'AddGameController',
                resolve: {
                    search: function(){
                        return {};
                    }
                }
            })
            .when('/search/:text', {
                templateUrl: 'partials/addgame.html',
                controller: 'AddGameController',
                resolve: {
                    search: AddGameController.search
                }
            })
            .otherwise({redirectTo: '/'});
    }]);

GameBomb.factory('GameBombConfigService', function($giantbomb){
   var GBConfigService = {
       _config : null,
       save : function(config){
            this._config = config;
            localStorage.setItem('gamebombconfig', JSON.stringify(this._config));
            console.log("Saving GameBomb configuration ", this._config);
           //set api key
           $giantbomb.setAPIKey(this._config.apikey);
       },
        get : function(){
            if(this._config === null){
                var confvalue = localStorage.getItem('gamebombconfig');
                if(confvalue !== null){
                    this._config = JSON.parse(confvalue);
                    console.log("Loaded gamebobconfig object ", this._config);
                    //set api key
                    $giantbomb.setAPIKey(this._config.apikey);
                }
            }
            return this._config;
        }
   };
    return GBConfigService;
});
