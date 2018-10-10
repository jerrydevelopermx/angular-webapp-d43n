(function(){
    'use strict';
    angular.module('webApp')

    .component('appMain', {
        bindings: {
          data: '<',
        },
        templateUrl: 'views/main.html',
        controller: componentController
      })

      function componentController($scope){
        var vm = this;

        vm.$onInit = function(){
          vm.news = {
                      title: 'NOVEDADES',
                      content: `Equipos nuevos en venta
Los mejores equipos los tenemos para usted: multifuncionales, lasser jet, copiadoras, workcenter y mas, visita nuestro catalogo...

Equipos remanufacturados en venta
Contamos con equipos remanufacturados que cuentan con la misma calidad de impresion de los equipos nuevos a un mejor precio.
posicionamiento
Tiene un negocio en el que piensa que puede mejorar la entrada de dinero al contar con un equipo pero le falta capital, contamos con financiamiento para usted...`
          };
          vm.oferta = {
                                title: 'OFERTA COMERCIAL',
                                content: `Por que elegirnos
            Tenemos el compromiso de brindarle los mejores equipos y herramientas para sacar el maximo partido a su negocio

            Le brindamos consultoria en todo momento para usted`
                              }

          vm.mantenimiento = {
              title: 'Mantenimiento',
              class: 'black-background',
              colOne: {title: 'Preventivo',
                      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus condimentum condimentum molestie. Donec aliquam a mauris eu lobortis. In iaculis pretium sem, a placerat mi tempus quis. Morbi pulvinar ex quis luctus aliquam. Phasellus ullamcorper tincidunt metus ut molestie. Praesent non tincidunt dui. Vivamus dui sem, semper in eros vel, laoreet pellentesque ipsum.`},
              colTwo: {title: 'Correctivo',
                      content: `Pellentesque semper pulvinar diam sed venenatis. Aliquam ut mollis lectus. Morbi molestie aliquam risus, vitae maximus augue pretium a. Donec condimentum leo vel egestas pulvinar. Quisque vitae felis sit amet nulla convallis porta et in urna. Vivamus venenatis, ipsum vitae ultricies fermentum, metus nisi ullamcorper lorem, eget tempus ligula odio fermentum odio. Nam condimentum erat auctor ipsum faucibus, at mattis metus luctus. Sed vulputate rutrum dui vel placerat. Aenean congue`}
          }


        };


        vm.$postLink = function(){
          console.log('MAIN Post link() DOM ready!')
        };

        vm.$onChanges = function($event){
          console.log($event);
        };

        vm.$onDestroy = function(){
          console.log('MAIN component destroy!! :( ')
        };

      }

})();
