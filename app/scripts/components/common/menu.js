(function(){
    'use strict';
    angular.module('webApp')

    .component('appMenu', {
        bindings: {
          data: '<',
        },
        templateUrl: 'views/common/menu.html'
      })
})();
