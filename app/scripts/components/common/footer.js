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
            class: 'content-column-footer black-background',
            title: null,
            description: null,
            columns: [{
                      title: 'Productos',
                      class: '',
                      centered: false,
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
                    { title: 'Servicios',
                      class: '',
                      centered: false,
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
                      { title: '¡Síguenos!',
                        class: '',
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
                      }],
              footer : {
                class: '',
                content: [{
                           elementType: 'p',
                           text: '2018. DAEN. Diseño, artículos y equipos para negocios. Todos los derechos reservados. '
                }]
              }
          };

        }
      }

})();
