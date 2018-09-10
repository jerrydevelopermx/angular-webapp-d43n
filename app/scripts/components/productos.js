(function(){
    'use strict';
    angular.module('webApp')

    .component('appProductos', {
        bindings: {
          data: '<',
        },
        templateUrl: 'views/productos.html'
      })
})();
