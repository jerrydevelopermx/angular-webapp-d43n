(function(){
    'use strict';
    angular.module('webApp')

    .component('appServicios', {
        bindings: {
          data: '<',
        },
        templateUrl: 'views/servicios.html',
        controller: componentController
      })

      function componentController($scope){
        var vm = this;

        vm.$onInit = function(){
          vm.documentos = {
                      title: 'Redes de gestión de documentos',
                      colOne: {
                              content: [{
                                         elementType: 'p',
                                         text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus condimentum condimentum molestie. Pellentesque semper pulvinar diam sed venenatis. Aliquam ut mollis lectus. Morbi molestie aliquam risus,'
                                       }]

                            }
                      };
            vm.asesoramiento = {
                        title: 'Asesoramiento',
                        class: 'content-column blue-background',
                        styles: 'subcontent-title-blue',

                                  colOne: {
                                          content: [{
                                                     elementType: 'p',
                                                     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus condimentum condimentum molestie. Pellentesque semper pulvinar diam sed venenatis. Aliquam ut mollis lectus. Morbi molestie aliquam risus,'
                                                   }]

                                        }
                                  };
          vm.mantenimiento = {
              title: 'Mantenimiento',
              styles: 'subcontent-title-white',
              class: 'content-column',
              colOne: {
                      title: 'Preventivo',
                      content: [/*{
                                 elementType: 'icon',
                                 class: 'icon rounded medium fa-exclamation-triangle'},*/
                                {
                                 elementType: 'p',
                                 text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus condimentum condimentum molestie.'
                      }]
                    },
              colTwo: {
                      title: 'Correctivo',
                      content: [/*{
                                 elementType: 'icon',
                                 class: 'icon rounded medium fa-ambulance'},*/
                                {
                                 elementType: 'p',
                                 text: 'Pellentesque semper pulvinar diam sed venenatis. Aliquam ut mollis lectus. Morbi molestie aliquam risus, '
                               }]
                      }
            }

        }
      }

})();
