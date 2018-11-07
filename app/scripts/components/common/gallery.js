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
          vm.images = [
            {
              src: "images/banner-01.jpg",
              alt: "image 1",
              link: "http://www.higgidy.co.uk"
            },
            {
              src: "images/banner-02.jpg",
              alt: "image 2",
              link: "http://www.higgidy.co.uk"
            },
            {
              src: "images/konica-minolta.png",
              alt: "image 3",
              link: "http://www.higgidy.co.uk"
            },
            {
              src: "images/Logo-DAEN-350.png",
              alt: "image 3",
              link: "http://www.higgidy.co.uk"
            }
          ]


          }

      }
})();
