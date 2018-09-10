(function(){
    'use strict';
    angular.module('webApp')

    .component('appTwoCols', {
        bindings: {
          data: '<',
        },
        templateUrl: 'views/common/content-two-cols.html'
      })
})();
