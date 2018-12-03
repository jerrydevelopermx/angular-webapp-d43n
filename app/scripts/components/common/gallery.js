(function(){
    'use strict';
    angular.module('webApp')

    .component('appGallery', {
        bindings: {
          data: '<',
        },
        templateUrl: 'views/common/gallery.html',
        controller: componentController
    })

      function componentController($scope){
        var vm = this;

        vm.$onInit = function(){
          vm.images2 = ["images/banner-01.jpg","images/banner-02.jpg"];
          vm.images = [
            {
              image: "images/banner-01.jpg",
              title: "image 1",
              description: "http://www.higgidy.co.uk"
            },
            {
              image: "images/banner-02.jpg",
              title: "image 2",
              description: "http://www.higgidy.co.uk"
            },
            {
              image: "images/konica-minolta.png",
              title: "image 3",
              description: "http://www.higgidy.co.uk"
            },
            {
              image: "images/Logo-DAEN-350.png",
              title: "image 3",
              description: "http://www.higgidy.co.uk"
            }
          ]


          }

      }
})();
