(function(){
    'use strict';
    angular.module('webApp')

    .component('appLocation', {
        bindings: {
          data: '<',
        },
        templateUrl: 'views/common/location.html'
      })
})();
