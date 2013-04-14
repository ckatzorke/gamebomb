'use strict';

GameBomb.controller('NavigationController', function($scope, $location){
    $scope.navigate = function(path){
        $location.path('/'+path);
    }


});

GameBomb.controller('HomeController', function($scope, $giantbomb){

});

/**
 * Config Controller
 */
GameBomb.controller('ConfigController', function($scope, $giantbomb, GameBombConfigService){

    $scope.config = GameBombConfigService.get();

    $scope.save = function(){
        GameBombConfigService.save($scope.config);
    };

    $scope.showXBoxGamertag = function(){
        if($scope.config != null && $scope.config.  xbox != null){
            $scope.xboxgamertagurl = "http://www.xboxgamertag.com/gamercard/" + $scope.config.xbox.gamertag + "/" + $scope.config.xbox.theme + "/card.png";
        }
    };

    $scope.previewXBoxGamertag = function(){
        $scope.xboxgamertagurl = "http://www.xboxgamertag.com/gamercard/" + $scope.config.xbox.gamertag + "/" + $scope.config.xbox.theme + "/card.png";
    };

    $scope.showXBoxGamertag();


});

var AddGameController = GameBomb.controller('AddGameController', function($scope, $location, search){
    $scope.searchText = search.searchText;
    $scope.searching = false;
    $scope.searchResult = search.result;

    //define btn handler
    $scope.performSearch = function(){
        $scope.searching = true;
        console.log("Searching for", $scope.searchText);
        $location.path("/search/"+ $scope.searchText);
    };

});

AddGameController.search = function($q, $route, $giantbomb, GameBombConfigService){
    var defer = $q.defer();
    //until I find a way to call this during init
    GameBombConfigService.get();
    $giantbomb.gameSearch($route.current.params.text, function(result){
        defer.resolve({'searchText' : $route.current.params.text, 'result' : result});
    });
    return defer.promise;

}