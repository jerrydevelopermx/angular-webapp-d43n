(function(){
    'use strict';
    angular.module('webApp')

    .component('appLocation', {
        bindings: {
          data: '<',
        },
        templateUrl: 'views/common/location.html',
        controller: componentController
      })


      function componentController($scope){
        var vm = this;
        console.log("MAIN Component controller here!");
        //19.045605378620966%2C-98.19414966997527
        vm.map = {center: {latitude: 19.045605378620966, longitude: -98.19414966997527 }, zoom: 18 };

        vm.$onInit = function(){

          $scope.$emit('init MAIN component()');
          console.log('init MAIN component()');
        };


    /*    vm.myMap = function() {
            var mapOptions = {
                center: new google.maps.LatLng(51.5, -0.12),
                zoom: 10,
                mapTypeId: google.maps.MapTypeId.HYBRID
            }
            $vm.map = new google.maps.Map(document.getElementById("map"), mapOptions);
            }
*/
      }
})();
