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
                      styles: 'footer-div',
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
                              centered: true,
                              content: [{
                                          elementType: 'ul',
                                          class: 'icons',
                                          list: [{
                                                    label:'',
                                                    class:'icon rounded medium fa-facebook'
                                                  },
                                                  {
                                                    label:'',
                                                    class: 'icon rounded medium fa-twitter'
                                                  }/*,
                                                  {
                                                    label:'',
                                                    class: 'icon rounded medium fa-youtube'
                                                  },
                                                  {
                                                    label:'',
                                                    class: 'icon rounded medium fa-pinterest'
                                                  }*/
                                                ]

                                        }]
                              }
            };

          vm.copyright = {
            class: 'black-background',
            styles: 'footer-div',
            colOne: {
                    content: [{
                               elementType: 'p',
                               text: '2018. DAEN. Todos los derechos reservados. '
                    }],
                    centered: true
                  }
          }

        }
      }

})();
