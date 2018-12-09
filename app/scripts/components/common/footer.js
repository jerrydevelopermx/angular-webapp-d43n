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
                      titleClass:'centered',
                      centered: false,
                      content: [{
                                  elementType: 'ul',
                                  class: 'footer-list',
                                  list: [{
                                            label:'Konica Minolta',
                                            url:'#!/productos/konica'
                                          },
                                          {
                                            label:'OKI',
                                            url:'#!/productos/oki'
                                          },
                                          {
                                            label:'Zebra',
                                            url:'#!/productos/zebra'
                                          }]

                                }]
                    },
                    { title: 'Servicios',
                      class: '',
                      titleClass:'centered',
                      centered: false,
                      content: [{
                                  elementType: 'ul',
                                  class: 'footer-list',
                                  list: [{
                                            label:'Gestión de documentos',
                                            url:'#!/servicios/documentos'
                                          },
                                          {
                                            label:'Mantenimiento',
                                            url:'#!/servicios/mantenimiento'
                                          },
                                          {
                                            label:'Asesoramiento',
                                            url:'#!/servicios/asesoramiento'
                                          },
                                          {
                                            label:'Materiales y consumibles',
                                            url:'#!/servicios/materiales'
                                          }
                                          ]
                                }]
                      },
                      { title: '¡Síguenos!',
                      titleClass:'centered',
                      class: '',
                        centered: true,
                        content: [{
                                    elementType: 'ul',
                                    class: 'icons',
                                    list: [{
                                              url:'https://www.facebook.com/DAEN-SA-De-CV-364636657018087/',
                                              label: '',
                                              class:'icon rounded medium fa-facebook'
                                            },
                                            {
                                              url: 'https://twitter.com/DaenCopiadoras',
                                              label:'',
                                              class: 'icon rounded medium fa-twitter'
                                            }/*,
                                            {
                                            #!/{
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
              bottom : {
                class: '',
                content: [{
                           elementType: 'p',
                           class: 'centered',
                           text: '2018. DAEN. Diseño, artículos y equipos para negocios. Todos los derechos reservados. '
                }]
              }
          };

        }
      }

})();
