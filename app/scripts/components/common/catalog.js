(function(){
    'use strict';
    angular.module('webApp')

    .component('appCatalog', {
        bindings: {
          data: '<',
        },
        templateUrl: 'views/common/catalog.html'
      })
})();
