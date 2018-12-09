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
          vm.quienes = {
                      class: 'content-column',
                      title: {
                              text: 'Conoce DAEN',
                              class: 'subcontent-title-white'
                            },
                      description: null,
                      columns: [{
                                title: '',
                                class: 'content-column',
                                centered: true,
                                content: [{
                                           elementType: 'p',
                                           class: 'justified',
                                           text: 'DAEN se funda el 19 de Enero de 2003, como una inquietud a dar respuesta a los usuarios como una empresa seria, honesta y que cumpla  con las normas de calidad que las empresas requieren.'
                                         },
                                         {
                                           elementType:'p',
                                           class: 'justified',
                                           text:'En quince años hemos logrado consolidarnos como una de las empresas de mayor prestigio en nuestra área al proveer a nuestros clientes un sistema continuo de monitoreo, lo que nos hace los mejores socios en sus negocios, manteniéndolos a la vanguardia y mejorando sus sistemas día a día.'
                                         }]
                              }],
                      bottom : {
                        class: '',
                        content: [{
                                    elementType: 'ul',
                                    class: 'actions centered',
                                    list: [{
                                              label:'Ver más',
                                              class:'button medium',
                                              url: '#!/nosotros'
                                          }]

                                  }]
                      }
                  };

          vm.oferta = {
            class: 'content-column blue-background',
            title: {
                    text: 'OFERTA COMERCIAL',
                    class: 'subcontent-title-blue'
                  },
            description: {
                          text: 'En DAEN estamos comprometidos con la calidad. Es por eso que somos distribuidores de las marcas más reconocidas del mercado:',
                          class: 'subcontent-title centered'
                        },
            columns: [{
                      title: '',
                      class: 'content-column',
                      centered: true,
                      content: [{
                                 elementType: 'img',
                                 src: 'images/konica-minolta.png',
                                 class: 'logo-partner'
                               }]
                    },
                    {
                      title: '',
                      class: 'content-column',
                      centered: true,
                      content: [{
                                 elementType: 'img',
                                 src: 'images/oki.png',
                                 class: 'logo-partner'
                               }]
                    },
                    {
                      title: '',
                      class: 'content-column',
                      centered: true,
                      content: [{
                                 elementType: 'img',
                                 src: 'images/zebra.png',
                                 class: 'logo-partner'
                               }]
                    }],
              bottom : {
                class: '',
                content: [{
                            elementType: 'ul',
                            class: 'actions centered',
                            list: [{
                                      label:'Ver más',
                                      class:'button medium',
                                      url:'#!/productos'
                                  }]

                          }]
              }
          };

          vm.servicios = {
            class: 'content-column',
            title: {
                    text: 'SERVICIOS',
                    class: 'subcontent-title-white'
                  },
            description: null,
            columns: [{
                      title: 'Redes de gestión de documentos',
                      class: 'content-column',
                      centered: true,
                      content: [{
                                  elementType: 'p',
                                  class: 'justified',
                                  text: 'Somos distribuidores autorizados de marcas importantes como Konica Minolta y te ofrecemos...'
                                }]
                    },
                    {
                      title: 'Asesoramiento',
                      class: 'content-column',
                      centered: true,
                      content: [{
                                 elementType: 'p',
                                 class: 'justified',
                                 text: 'Contar con un asesor de confianza beneficia a la compañía a buscar canales de mejora y desarrollo. Te ofrecemos la mejor información y...'
                               }]
                    },
                    {
                      title: 'Mantenimiento',
                      class: 'content-column',
                      centered: true,
                      content: [{
                                  elementType: 'p',
                                  class: 'justified',
                                  text: 'Si has adquirido algún equipo con nosotros, te ofrecemos al mejor equipo de profesionales capacitados para darle mantenimiento y...'
                                }]
                    },
                    {
                      title: 'Materiales y consumibles',
                      class: 'content-column',
                      centered: true,
                      content: [{
                                  elementType: 'p',
                                  class: 'justified',
                                  text: 'Te ofrecemos todo lo necesario para surtir papelerías y centros de negocio, con las líneas de consumibles más grandes a nivel mundial y...'
                                }]
                    }],
              bottom : {
                class: '',
                content: [{
                            elementType: 'ul',
                            class: 'actions centered',
                            list: [{
                                      label:'Ver más',
                                      class:'button medium',
                                      url:'#!/servicios'
                                  }]

                          }]
              }
          };


        };

      }

})();
