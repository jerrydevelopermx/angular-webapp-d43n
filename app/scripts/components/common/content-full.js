(function(){
    'use strict';
    angular.module('webApp')

    .component('appFullContent', {
        bindings: {
          data: '=',
        },
        templateUrl: 'views/common/content-full.html',
        controller: componentController
      });
    function componentController($scope, $timeout, $mdSidenav){
      var vm = this;


      vm.$onInit = function(){

        //console.log(vm.data);

      };

    }
})();
