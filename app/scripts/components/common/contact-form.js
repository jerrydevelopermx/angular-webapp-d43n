(function(){
    'use strict';
    angular.module('webApp')

    .component('appContactForm', {
        bindings: {
          data: '<',
        },
        templateUrl: 'views/common/contact-form.html'
      })
})();
