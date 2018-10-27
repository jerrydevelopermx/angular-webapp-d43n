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
          vm.servicios = {
                      title: 'CREA, GESTIONA, INNOVA',
                      colOne: {
                              content: [{
                                         elementType: 'p',
                                         text: 'Con la más alta tecnología en sistemas de gestión de documentos, las marcas más innovadoras del mercado y el compromiso para hacer crecer tu negocio, te ofrecemos:'
                                       }]

                            }
                      };

        }
      }

})();
