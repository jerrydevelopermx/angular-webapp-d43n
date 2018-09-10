(function(){
    'use strict';
    angular.module('webApp')

    .component('appNosotros', {
        bindings: {
          data: '<',
        },
        templateUrl: 'views/nosotros.html'
      })
})();
