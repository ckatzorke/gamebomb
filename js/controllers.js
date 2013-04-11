GameBomb.controller('NavigationController', function($scope, $location){
    $scope.navigate = function(path){
        $location.path('/'+path);
    }


});

GameBomb.controller('HomeController', function($scope, $giantbomb){

});

GameBomb.controller('ConfigController', function($scope, $giantbomb){

});

GameBomb.controller('AddGameController', function($scope, $giantbomb){

});