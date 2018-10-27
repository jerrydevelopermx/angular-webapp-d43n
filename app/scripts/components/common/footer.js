(function(){
    'use strict';
    angular.module('webApp')

    .component('footerComp', {
        bindings: {
          data: '=',
        },
        templateUrl: 'views/common/footer.html',
        controller: componentController
      })

      function componentController($scope){
        var vm = this;

        vm.$onInit = function(){
          vm.footer = {
              title: null,
              description: null,
              class: 'black-background',
              colOne: {
                      title: 'Productos',
                      class: 'ul-footer',
                      content: [{
                                  elementType: 'ul',
                                  list: [{
                                            label:'Konica Minolta'
                                          },
                                          {
                                            label:'OKI'
                                          },
                                          {
                                            label:'Zebra'
                                          }]

                                }]
                    },
              colTwo: {
                      title: 'Servicios',
                      class: 'ul-footer',
                      content: [{
                                  elementType: 'ul',
                                  list: [{
                                            label:'Gestión de documentos'
                                          },
                                          {
                                            label:'Asesoramiento'
                                          },
                                          {
                                            label:'Mantenimiento'
                                          }]

                                }]
                      },
                      colThree: {
                              title: '¡Síguenos!',
                              content: [{
                                         elementType: 'icon',
                                         class: 'icon rounded medium fa-facebook'
                                       },
                                       {
                                          elementType: 'icon',
                                          class: 'icon rounded medium fa-twitter'
                                        },
                                        {
                                           elementType: 'icon',
                                           class: 'icon rounded medium fa-youtube'
                                         },
                                         {
                                            elementType: 'icon',
                                            class: 'icon rounded medium fa-pinterest'
                                          }]
                              }
            };

          vm.copyright = {
            class: 'black-background',
            colOne: {
                    content: [{
                               elementType: 'p',
                               text: '2018. DAEN. Todos los derechos reservados. '
                    }]
                  }
          }

        }
      }

})();
