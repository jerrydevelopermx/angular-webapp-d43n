(function(){
    'use strict';
    angular.module('webApp')

    .component('appFullContent', {
        bindings: {
          data: '<',
        },
        templateUrl: 'views/common/content-full.html'
      })
})();
