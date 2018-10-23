(function(){
    'use strict';
    angular.module('webApp')

    .component('appThreeCols', {
        bindings: {
          data: '=',
        },
        templateUrl: 'views/common/content-three-cols.html',
        controller: componentController
      });
    function componentController($scope){
      var vm = this;


      vm.$onInit = function(){

        console.log(vm.data);

      };

    }
})();
