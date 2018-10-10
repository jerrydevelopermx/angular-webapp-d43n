(function(){
    'use strict';
    angular.module('webApp')

    .component('appTwoCols', {
        bindings: {
          data: '=',
        },
        templateUrl: 'views/common/content-two-cols.html',
        controller: componentController
      });

      function componentController($scope){
        var vm = this;

        vm.$onInit = function(){
          console.log(vm.data)
        }
      }

})();
