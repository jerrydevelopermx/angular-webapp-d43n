(function(){
    'use strict';
    angular.module('webApp')

    .component('appContacto', {
        bindings: {
          data: '<',
        },
        templateUrl: 'views/contacto.html'
      })
})();
