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
                                         text: 'DAEN se funda el 19 de enero de 2003, como una inquietud a dar respuesta a los usuarios como una empresa seria, honesta y que cumpla  con las normas de calidad que la sociedad requiere para el buen desempeño en el área de fotocopiado, engargolado y enmicado.'
                                       },
                                       {
                                         elementType:'p',
                                         text:'Como distribuidor autorizado de Konica Minolta, SHARP y Panasonic ofrecemos servicio integral de venta y renta de equipos multifuncionales. Lo mejor en calidad de impresión, escaneo, digitalización, gran funcionalidad y sistemas de red al más bajo costo por proceso.'
                                       },
                                       {
                                         elementType:'p',
                                         text:'Ofrecemos todo lo necesario para surtir papelerías y  centros de negocio con: engargoladoras, enmicadoras, cubiertas plásticas, arillo de plástico y metálico marca Zebra y Perfex; equipos de trabajo rudo con las garantías más amplias del mercado. Materiales y consumibles Katun, ACM Tecnologies, entre otros, las líneas de consumibles y fabricantes más grandes a nivel mundial con una gran infraestructura de desarrollo, mejora continua de productos, y distribución.'
                                       },
                                       {
                                         elementType:'p',
                                         text:'En siete años hemos logrado consolidarnos como una de las empresas de mayor prestigio en nuestra área al proveer a nuestros clientes un sistema continuo de monitoreo lo que nos hace los mejores socios en sus negocios, manteniéndolos a la vanguardia y mejorando sus sistemas día a día.'
                                       }]

                            }
                      };

          vm.oferta = {
              title: 'OFERTA COMERCIAL',
              description:'Somos distribuidores de las marcas más reconocidas del mercado',
              class: 'blue-background',
              colOne: {
                      title: 'Mantenimiento Preventivo',
                      content: [{
                                 elementType: 'icon',
                                 class: 'icon rounded medium fa-exclamation-triangle'},
                                {
                                 elementType: 'p',
                                 text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus condimentum condimentum molestie.'
                      }]
                    },
              colTwo: {
                      title: 'Mantenimiento Correctivo',
                      content: [{
                                 elementType: 'icon',
                                 class: 'icon rounded medium fa-ambulance'},
                                {
                                 elementType: 'p',
                                 text: 'Pellentesque semper pulvinar diam sed venenatis. Aliquam ut mollis lectus. Morbi molestie aliquam risus, '
                               }]
                      }
              };
          vm.servicios = {
              title: 'Servicios',
              class: '',
              colOne: {
                      title: 'Mantenimiento Preventivo',
                      content: [{
                                 elementType: 'icon',
                                 class: 'icon rounded medium fa-exclamation-triangle'},
                                {
                                 elementType: 'p',
                                 text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus condimentum condimentum molestie.'
                      }]
                    },
              colTwo: {
                      title: 'Mantenimiento Correctivo',
                      content: [{
                                 elementType: 'icon',
                                 class: 'icon rounded medium fa-ambulance'},
                                {
                                 elementType: 'p',
                                 text: 'Pellentesque semper pulvinar diam sed venenatis. Aliquam ut mollis lectus. Morbi molestie aliquam risus, '
                               }]
                      },
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
