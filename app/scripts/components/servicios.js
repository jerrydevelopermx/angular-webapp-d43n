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
                      class: 'content-column',
                      title: {
                              text: 'CREA, GESTIONA, INNOVA',
                              class: 'subcontent-title-white'
                            },
                      description: {
                                    text: 'Con la más alta tecnología en sistemas de gestión de documentos, las marcas más innovadoras del mercado y nuestro compromiso por hacer crecer tu negocio, te ofrecemos:',
                                    class: 'subcontent-title justified'
                                  },
                      columns: []
                  };


          vm.docs = {
            class: 'content-column blue-background',
            title: {
                    text: 'Redes de gestión de documentos',
                    class: 'subcontent-title-blue'
                  },
            description: null,
            columns: [{
                      title: '',
                      class: 'content-column',
                      centered: true,
                      content: [{
                                 elementType: 'p',
                                 text: 'Somos distribuidores autorizados de marcas importantes como Konica Minolta y te ofrecemos un servicio integral en la venta y renta de equipos multifuncionales. Lo mejor en calidad de impresión, escaneo y sistemas de red.'
                               }]
                    },
                    {
                      title: '',
                      class: 'content-column',
                      centered: true,
                      content: [{
                                  elementType: 'img',
                                  src: 'images/servicios/redes.png',
                                  class: 'img-servicio'
                              }]
                  }]
          };

          vm.mantenimiento = {
            class: 'content-column',
            title: {
                    text: 'Mantenimiento',
                    class: 'subcontent-title-white'
                  },
            description: null,
            columns: [{
                      title: '',
                      class: 'content-column',
                      centered: true,
                      content: [{
                                  elementType: 'img',
                                  src: 'images/servicios/mantenimiento.png',
                                  class: 'img-servicio'
                              }]
                    },
                    {
                      title: '',
                      class: 'content-column',
                      centered: true,
                      content: [{
                         elementType: 'p',
                         text: 'Si has adquirido algún equipo con nosotros, te ofrecemos al mejor equipo de profesionales capacitados para darle mantenimiento y renovación a tu equipo y siempre se mantenga en óptimas condiciones.'
                       }]
                  }]
          };

          vm.asesoramiento = {
            class: 'content-column blue-background',
            title: {
                    text: 'Asesoramiento',
                    class: 'subcontent-title-blue'
                  },
            description: null,
            columns: [{
                      title: '',
                      class: 'content-column',
                      centered: true,
                      content: [{
                         elementType: 'p',
                         text: 'Contar con un asesor de confianza beneficia a la compañía a buscar canales de mejora y desarrollo. Te ofrecemos la mejor información y servicio para facilitar, mejorar y optimizar tu negocio con los últimos avances en tecnología.'
                        }]
                    },
                    {
                      title: '',
                      class: 'content-column',
                      centered: true,
                      content: [{
                                 elementType: 'img',
                                 src: 'images/servicios/asesor.png',
                                 class: 'img-servicio'
                             }]
                  }]
          };
          vm.materiales = {
            class: 'content-column',
            title: {
                    text: 'Materiales y consumibles',
                    class: 'subcontent-title-white'
                  },
            description: null,
            columns: [{
                      title: '',
                      class: 'content-column',
                      centered: true,
                      content: [{
                                  elementType: 'img',
                                  src: 'images/servicios/materiales.png',
                                  class: 'img-servicio'
                              }]
                    },
                    {
                      title: '',
                      class: 'content-column',
                      centered: true,
                      content: [{
                         elementType: 'p',
                         text: 'Te ofrecemos todo lo necesario para surtir papelerías y centros de negocio, con las líneas de consumibles más grandes a nivel mundial y con una gran infraestructura de desarrollo, mejora continua de productos y distribución.'
                       }]
                  }]
          };


        }
      }

})();
