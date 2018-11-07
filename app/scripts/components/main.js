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
                              text: '¿QUIÉNES SOMOS?',
                              class: 'subcontent-title-white'
                            },
                      description: null,
                      columns: [{
                                title: '',
                                class: 'content-column',
                                centered: true,
                                content: [{
                                           elementType: 'p',
                                           text: 'DAEN se funda el 19 de enero de 2003, como una inquietud a dar respuesta a los usuarios como una empresa seria, honesta y que cumpla  con las normas de calidad que las empresas requieren.'
                                         },
                                         {
                                           elementType:'p',
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
                                              url: 'nosotros'
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
                          class: 'subcontent-title justified'
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
                      title: 'Asesoramiento',
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
                                      url:'productos'
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
                                  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus condimentum condimentum molestie.'
                                }]
                    },
                    {
                      title: 'Asesoramiento',
                      class: 'content-column',
                      centered: true,
                      content: [{
                                 elementType: 'p',
                                 text: 'Pellentesque semper pulvinar diam sed venenatis. Aliquam ut mollis lectus. Morbi molestie aliquam risus, '
                               }]
                    },
                    {
                      title: 'Mantenimiento',
                      class: 'content-column',
                      centered: true,
                      content: [{
                                  elementType: 'p',
                                  text: 'Pellentesque semper pulvinar diam sed venenatis. Aliquam ut mollis lectus. Morbi molestie aliquam risus, '
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
                                      url:'servicios'
                                  }]

                          }]
              }
          };


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
