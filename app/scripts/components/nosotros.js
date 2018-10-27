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
              title: 'COMPROMISO EMPRESARIAL',
              description: null,
              class: 'content-column',
              styles: 'subcontent-title-white',
              colOne: {
                      title: 'Misión',
                      content: [{
                          elementType: 'p',
                          text: 'Ser una Empresa dedicada a la aplicación de sistemas de gestión en impresión y reproducción con la más alta tecnología con servicio de calidad, en un marco de honestidad, respeto y confianza. Proporcionando beneficios que brinden oportunidades de crecimiento y superación a nuestros clientes internos y externos.'
                      }]
                    },
              colTwo: {
                      title: 'Visión',
                      content: [{
                          elementType: 'p',
                          text: 'Ser la empresa líder en el Estado, traspasando las fronteras del mismo, dominando nuestra área comercial para llegar a quienes requieran nuestros productos proporcionando calidad en el servicio, y personal especializado que entienda sus necesidades, exigiendo nuestro máximo esfuerzo para satisfacerlas.'
                        }]
                      },
                colThree: {
                        title: 'Filosofía',
                        content: [{
                            elementType: 'p',
                            text: 'Por ello nuestra filosofía siempre estará centrada en brindar el mejor servicio, con excelente calidad y a precios competitivos, manejando el estándar de “no ofrecer lo que no podemos cumplir”. Para lograr estar en el corazón de nuestros clientes como símbolos de respeto, ética y honestidad.'
                          }]
                        }

          };

          vm.valores = {
              title: 'Nuestros valores',
              description: null,
              class: 'content-column blue-background',
              styles: 'subcontent-title-blue',
              colOne: {
                      title: 'Honestidad',
                      content: [{
                          elementType: 'p',
                          text: 'Fundamentada en la calidad humana expresada en el trato amable, la coherencia y sinceridad hacia nuestros clientes y colaboradores. Cuando se está entre personas con este valor, cualquier proyecto humano se puede realizar y la confianza toma gran relevancia para llevarlo a cabo. Los integrantes de DAEN se conducen con rectitud, honradez, no engañan, ni mienten, cumplen con los deberes y obligaciones propias.'
                      }]
                    },
              colTwo: {
                      title: 'Responsabilidad',
                      content: [{
                          elementType: 'p',
                          text: 'Los integrantes de DAEN cumplirán fiel y disciplinadamente todos los deberes propios de su trabajo en la empresa, sabrán ir más allá si así lo requiera el interés de la organización o los deberes de lealtad y compañerismo. '
                        }]
                      }

          };
          vm.valores2 = {
              title: null,
              description: null,
              class: 'content-column blue-background',
              styles: 'subcontent-title-blue',
              colOne: {
                      title: 'Respeto',
                      content: [{
                          elementType: 'p',
                          text: 'El equipo de DAEN demuestra empatía y tolerancia, reconoce y comprende individualidades. Demuestran ser justos, cuidadosos, sinceros, amables y considerados en el trato con cada persona con la que se relacione como producto de su trabajo. '
                      }]
                    },
              colTwo: {
                      title: 'Compromiso',
                      content: [{
                          elementType: 'p',
                          text: 'Este valor aunado a la responsabilidad con las labores que debemos desempeñar, tanto con nuestros clientes como con nuestro propio equipo, los visualizamos como claves para el logro del éxito organizacional.'
                        }]
                      }

          };
          vm.objetivos = {
              title: 'OBJETIVOS',
              description: 'En DAEN el cliente es nuestra razón de ser y estamos comprometidos con su total satisfacción, contando con un equipo de personas motivadas a servir mediante un proceso de mejora continua, ofreciendo productos innovadores con calidad en el mercado.',
              class: 'content-column',
              styles: 'subcontent-title-white',
              colOne: {
                      title: 'Empresa socialmente responsable',
                      content: [{
                                 elementType: 'img',
                                 src: 'images/esr.png',
                                 class: 'logo-partner'
                      }]
                    },
              colTwo: {
                      title: 'Mejora continua',
                      content: [{
                                 elementType: 'img',
                                 src: 'images/mejora.png',
                                 class: 'logo-partner'
                               }]
                      },
                colThree: {
                        title: 'Rentabilidad',
                        content: [{
                                   elementType: 'img',
                                   src: 'images/rentabilidad.png',
                                   class: 'logo-partner'
                                 }]
                        }

          };
          vm.objetivos2 = {
              title: null,
              description: null,
              class: 'content-column',
              styles: 'subcontent-title-white',
              colOne: {
                      title: 'Compromiso',
                      content: [{
                                 elementType: 'img',
                                 src: 'images/compromiso.png',
                                 class: 'logo-partner'
                               }]
                    },
              colTwo: {
                      title: 'Alianzas estratégicas',
                      content: [{
                                 elementType: 'img',
                                 src: 'images/alianzas.png',
                                 class: 'logo-partner'
                               }]
                      }

          };

        }


      }
})();
