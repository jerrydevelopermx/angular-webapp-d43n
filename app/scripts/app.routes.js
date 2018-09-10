angular
  .module('webApp')
  .config(routes);

/**
 * @function routes
 */
function routes ($stateProvider) {

    $stateProvider
                /*.state('home', {
                    redirectTo: function (trans) {
                        let appState = trans.injector().get('appState');
                        return appState.getHomePage();
                    },
                    publicPage: true
                })*/
                .state('home', {
                    url: '/',
                    component: 'appMain',
                    publicPage: true
                })
                .state('nosotros', {
                    url: '/nosotros',
                    component: 'appNosotros',
                    publicPage: true
                })

                .state('contacto', {
                    url: '/contacto',
                    component: 'appContacto',
                    publicPage: true
                })
                .state('productos', {
                    url: '/productos',
                    component: 'appProductos',
                    publicPage: true
                })

                .state('servicios', {
                    url: '/servicios',
                    component: 'appServicios',
                    publicPage: true
                })
                .state('soporte', {
                    url: '/soporte',
                    component: 'appSoporte',
                    publicPage: true
                })


                /*
                .state('about', {
                    url: '/about',
                    //redirectTo: redirect,
                    component: 'about',
                    publicPage: true
                    //templateUrl: 'view/pages/about/about.html',
                    //controllerAs: 'about'
                })

                */
/*
  $routeProvider
    .when('/', {
      templateUrl: 'views/index.html',
      controller: 'MainCtrl as vm',
    })
    .when('/nosotros', {
      templateUrl: 'views/nosotros.html',
      controller: 'NosotrosCtrl as nc',
    })

    .when('/productos', {
      templateUrl: 'views/productos.html',
      controller: 'ProductosCtrl as pc',
    })

    .when('/servicios', {
      templateUrl: 'views/servicios.html',
      controller: 'ProductosCtrl as pc',
    })

    .when('/soporte', {
      templateUrl: 'views/soporte.html',
      controller: 'ProductosCtrl as pc',
    })

    .when('/contacto', {
      templateUrl: 'views/contacto.html',
      controller: 'ProductosCtrl as pc',
    })

    .otherwise({
      redirectTo: '/',
    });
*/

}
