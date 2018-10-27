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
                          text: 'Ser una Empresa dedicada a la aplicación de sistemas de gestión en impresión y reproducción con la más alta tecnología con servicio de calidad, en un marco de honestidad, respeto y confianza. Proporcionando beneficios que brinden oportunidades de crecimiento y superación a nuestros clientes internos y externos.'
                      }]
                    },
              colTwo: {
                      title: 'Responsabilidad',
                      content: [{
                          elementType: 'p',
                          text: 'Ser la empresa líder en el Estado, traspasando las fronteras del mismo, dominando nuestra área comercial para llegar a quienes requieran nuestros productos proporcionando calidad en el servicio, y personal especializado que entienda sus necesidades, exigiendo nuestro máximo esfuerzo para satisfacerlas.'
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
                          text: 'Ser una Empresa dedicada a la aplicación de sistemas de gestión en impresión y reproducción con la más alta tecnología con servicio de calidad, en un marco de honestidad, respeto y confianza. Proporcionando beneficios que brinden oportunidades de crecimiento y superación a nuestros clientes internos y externos.'
                      }]
                    },
              colTwo: {
                      title: 'Compromiso',
                      content: [{
                          elementType: 'p',
                          text: 'Ser la empresa líder en el Estado, traspasando las fronteras del mismo, dominando nuestra área comercial para llegar a quienes requieran nuestros productos proporcionando calidad en el servicio, y personal especializado que entienda sus necesidades, exigiendo nuestro máximo esfuerzo para satisfacerlas.'
                        }]
                      }

          };
          vm.objetivos = {
              title: 'OBJETIVOS',
              description: null,
              class: 'content-column',
              styles: 'subcontent-title-white',
              colOne: {
                      title: 'Empresa socialmente responsable',
                      content: [{
                          elementType: 'p',
                          text: 'Ser una Empresa dedicada a la aplicación de sistemas de gestión en impresión y reproducción con la más alta tecnología con servicio de calidad, en un marco de honestidad, respeto y confianza. Proporcionando beneficios que brinden oportunidades de crecimiento y superación a nuestros clientes internos y externos.'
                      }]
                    },
              colTwo: {
                      title: 'Mejora continua',
                      content: [{
                          elementType: 'p',
                          text: 'Ser la empresa líder en el Estado, traspasando las fronteras del mismo, dominando nuestra área comercial para llegar a quienes requieran nuestros productos proporcionando calidad en el servicio, y personal especializado que entienda sus necesidades, exigiendo nuestro máximo esfuerzo para satisfacerlas.'
                        }]
                      },
                colThree: {
                        title: 'Rentabilidad',
                        content: [{
                            elementType: 'p',
                            text: 'Por ello nuestra filosofía siempre estará centrada en brindar el mejor servicio, con excelente calidad y a precios competitivos, manejando el estándar de “no ofrecer lo que no podemos cumplir”. Para lograr estar en el corazón de nuestros clientes como símbolos de respeto, ética y honestidad.'
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
                          elementType: 'p',
                          text: 'Ser una Empresa dedicada a la aplicación de sistemas de gestión en impresión y reproducción con la más alta tecnología con servicio de calidad, en un marco de honestidad, respeto y confianza. Proporcionando beneficios que brinden oportunidades de crecimiento y superación a nuestros clientes internos y externos.'
                      }]
                    },
              colTwo: {
                      title: 'Alianzas estratégicas',
                      content: [{
                          elementType: 'p',
                          text: 'Ser la empresa líder en el Estado, traspasando las fronteras del mismo, dominando nuestra área comercial para llegar a quienes requieran nuestros productos proporcionando calidad en el servicio, y personal especializado que entienda sus necesidades, exigiendo nuestro máximo esfuerzo para satisfacerlas.'
                        }]
                      }

          };

        }


      }
})();
