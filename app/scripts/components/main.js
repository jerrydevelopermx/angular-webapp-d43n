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
                      title: '¿QUIÉNES SOMOS?',
                      colOne: {
                              content: [{
                                         elementType: 'p',
                                         text: 'DAEN se funda el 19 de enero de 2003, como una inquietud a dar respuesta a los usuarios como una empresa seria, honesta y que cumpla  con las normas de calidad que las empresas requieren.'
                                       },
                                       {
                                         elementType:'p',
                                         text:'En quince años hemos logrado consolidarnos como una de las empresas de mayor prestigio en nuestra área al proveer a nuestros clientes un sistema continuo de monitoreo, lo que nos hace los mejores socios en sus negocios, manteniéndolos a la vanguardia y mejorando sus sistemas día a día.'
                                       }]

                            }
                      };

          vm.oferta = {
              title: 'OFERTA COMERCIAL',
              description:'En DAEN estamos comprometidos con la calidad. Es por eso que somos distribuidores de las marcas más reconocidas del mercado:',
              class: 'content-column blue-background',
              styles: 'subcontent-title-blue',
              colOne: {
                      title: '',
                      content: [{
                                 elementType: 'img',
                                 src: 'images/konica-minolta.png',
                                 class: 'logo-partner'
                      }]
                    },
              colTwo: {
                      title: '',
                      content: [{
                                 elementType: 'img',
                                 src: 'images/brother.png',
                                 class: 'logo-partner'
                               }]
                      },
                colThree: {
                        title: '',
                        content: [{
                                   elementType: 'img',
                                   src: 'images/sharp.png',
                                   class: 'logo-partner'
                                 }]
                        }

          };
          vm.servicios = {
              title: 'Servicios',
              styles: 'subcontent-title-white',
              class: 'content-column',
              colOne: {
                      title: 'Redes de gestión de documentos',
                      content: [/*{
                                 elementType: 'icon',
                                 class: 'icon rounded medium fa-exclamation-triangle'},*/
                                {
                                 elementType: 'p',
                                 text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus condimentum condimentum molestie.'
                      }]
                    },
              colTwo: {
                      title: 'Asesoramiento',
                      content: [/*{
                                 elementType: 'icon',
                                 class: 'icon rounded medium fa-ambulance'},*/
                                {
                                 elementType: 'p',
                                 text: 'Pellentesque semper pulvinar diam sed venenatis. Aliquam ut mollis lectus. Morbi molestie aliquam risus, '
                               }]
                      },
                colThree: {
                        title: 'Mantenimiento',
                        content: [{
                         elementType: 'p',
                         text: 'Pellentesque semper pulvinar diam sed venenatis. Aliquam ut mollis lectus. Morbi molestie aliquam risus, '
                          }]
                        }
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
