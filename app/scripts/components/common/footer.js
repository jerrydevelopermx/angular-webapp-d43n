(function(){
    'use strict';
    angular.module('webApp')

    .component('footerComp', {
        bindings: {
          data: '<',
        },
        templateUrl: 'views/common/footer.html'
      })
})();
