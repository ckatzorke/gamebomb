'use strict';

GameBomb.directive('firsttimesetup', function(){
    return {
        'restrict': 'E',
        'template': '<span class="error">You have not defined your GiantBomb API key! Please do so in the <a ng-click="redirectTo(\'config\')">config section</a>.</span>'
    }

});