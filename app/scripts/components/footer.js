(function(){
    'use strict';
    angular.module('webApp')

    .component('footerComp', {
        bindings: {
          data: '<',
        },
        templateUrl: 'views/footer.html'
      })
})();
