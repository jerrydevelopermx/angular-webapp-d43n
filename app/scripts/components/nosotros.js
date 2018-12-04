(function(){
    'use strict';
    angular.module('webApp')

    .component('appNosotros', {
        bindings: {
          data: '<',
        },
        templateUrl: 'views/nosotros.html',
        controller: componentController
      })

      function componentController($scope){
        var vm = this;

        vm.$onInit = function(){

          vm.compromiso = {
            class: 'content-column',
            title: {
                    text: 'COMPROMISO EMPRESARIAL',
                    class: 'subcontent-title-white'
                  },
            description: null,
            columns: [{
                      title: 'Misión',
                      class: 'content-column',
                      centered: true,
                      content: [{
                          elementType: 'p',
                          text: 'Ser una empresa dedicada a la aplicación de sistemas de gestión en impresión y reproducción con la más alta tecnología con servicio de calidad, en un marco de honestidad, respeto y confianza. Proporcionando beneficios que brinden oportunidades de crecimiento y superación a nuestros clientes internos y externos.'
                      }]
                    },
                    {
                      title: 'Visión',
                      class: 'content-column',
                      centered: true,
                      content: [{
                          elementType: 'p',
                          text: 'Ser la empresa líder en el Estado, traspasando las fronteras del mismo, dominando nuestra área comercial para llegar a quienes requieran nuestros productos proporcionando calidad en el servicio, y personal especializado que entienda sus necesidades, exigiendo nuestro máximo esfuerzo para satisfacerlas.'
                        }]
                    },
                    {
                      title: 'Filosofía',
                      class: 'content-column',
                      centered: true,
                      content: [{
                          elementType: 'p',
                          text: 'Por ello nuestra filosofía siempre estará centrada en brindar el mejor servicio, con excelente calidad y a precios competitivos, manejando el estándar de “no ofrecer lo que no podemos cumplir”. Para lograr estar en el corazón de nuestros clientes como símbolos de respeto, ética y honestidad.'
                        }]
                    }]
          };

          vm.valores = {
            class: 'content-column blue-background',
            title: {
                    text: 'Nuestros valores',
                    class: 'subcontent-title-blue'
                  },
            description: null,
            rows: [{
              columns: [{
                        title: 'Honestidad',
                        class: 'content-column',
                        centered: true,
                        content: [{
                            elementType: 'p',
                            text: 'Fundamentada en la calidad humana expresada en el trato amable, la coherencia y sinceridad hacia nuestros clientes y colaboradores. Cuando se está entre personas con este valor, cualquier proyecto humano se puede realizar y la confianza toma gran relevancia para llevarlo a cabo.'
                        }]
                      },
                      {
                        title: 'Responsabilidad',
                        class: 'content-column',
                        centered: true,
                        content: [{
                            elementType: 'p',
                            text: 'Los integrantes de DAEN cumplirán fiel y disciplinadamente todos los deberes propios de su trabajo en la empresa, sabrán ir más allá si así lo requiera el interés de la organización o los deberes de lealtad y compañerismo. '
                          }]
                      }]
            },
            {
              columns: [{
                        title: 'Respeto',
                        class: 'content-column',
                        centered: true,
                        content: [{
                            elementType: 'p',
                            text: 'El equipo de DAEN demuestra empatía y tolerancia, reconoce y comprende individualidades. Demuestran ser justos, cuidadosos, sinceros, amables y considerados en el trato con cada persona con la que se relacione como producto de su trabajo. '
                        }]
                      },
                      {
                        title: 'Compromiso',
                        class: 'content-column',
                        centered: true,
                        content: [{
                            elementType: 'p',
                            text: 'Este valor aunado a la responsabilidad con las labores que debemos desempeñar, tanto con nuestros clientes como con nuestro propio equipo, los visualizamos como claves para el logro del éxito organizacional.'
                          }]
                      }]
            }]
          };

          vm.objetivos = {
            class: 'content-column',
            title: {
                    text: 'OBJETIVOS',
                    class: 'subcontent-title-white'
                  },
            description: {
                          text: 'En DAEN el cliente es nuestra razón de ser y estamos comprometidos con su total satisfacción, contando con un equipo de personas motivadas a servir mediante un proceso de mejora continua, ofreciendo productos innovadores con calidad en el mercado.',
                          class: 'subcontent-title justified'
                        },
            columns: [{
                      title: 'Empresa socialmente responsable',
                      class: 'content-column',
                      centered: true,
                      content: [{
                                 elementType: 'img',
                                 src: 'images/objetivos/esr.png',
                                 class: 'logo-partner'

                               }]
                    },
                    {
                      title: 'Mejora continua',
                      class: 'content-column',
                      centered: true,
                      content: [{
                                  elementType: 'img',
                                  src: 'images/objetivos/mejora.png',
                                  class: 'logo-partner'
                                }]
                    },
                    {
                      title: 'Rentabilidad',
                      class: 'content-column',
                      centered: true,
                      content: [{
                        elementType: 'img',
                        src: 'images/objetivos/rentabilidad.png',
                        class: 'logo-partner'
                                }]
                    },
                    {
                      title: 'Compromiso',
                      class: 'content-column',
                      centered: true,
                      content: [{
                        elementType: 'img',
                        src: 'images/objetivos/compromiso.png',
                        class: 'logo-partner'
                              }]
                    },
                    {
                      title: 'Alianzas estratégicas',
                      class: 'content-column',
                      centered: true,
                      content: [{
                        elementType: 'img',
                        src: 'images/objetivos/alianzas.png',
                        class: 'logo-partner'
                              }]
                    }
                  ]
          };

        }


      }
})();
