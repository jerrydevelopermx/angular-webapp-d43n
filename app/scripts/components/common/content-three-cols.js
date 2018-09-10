(function(){
    'use strict';
    angular.module('webApp')

    .component('appThreeCols', {
        bindings: {
          data: '<',
        },
        templateUrl: 'views/common/content-three-cols.html'
      })
})();
