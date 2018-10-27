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
              title: null,
              description: null,
              class: 'black-background',
              colOne: {
                      title: '',
                      content: [{
                                 elementType: 'p',
                                 text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus condimentum condimentum molestie. '
                      }]
                    },
              colTwo: {
                      title: '',
                      content: [{
                                 elementType: 'p',
                                 text: 'Pellentesque semper pulvinar diam sed venenatis. Aliquam ut mollis lectus. Morbi molestie aliquam risus, '
                               }]
                      },
                      colThree: {
                              title: '',
                              content: [{
                                         elementType: 'p',
                                         text: 'Pellentesque semper pulvinar diam sed venenatis. Aliquam ut mollis lectus. Morbi molestie aliquam '
                                       }]
                              }
            };

          vm.copyright = {
            class: 'black-background',
            colOne: {
                    content: [{
                               elementType: 'p',
                               text: '2018. DAEN. Todos los derechos reservados. '
                    }]
                  }
          }

        }
      }

})();
