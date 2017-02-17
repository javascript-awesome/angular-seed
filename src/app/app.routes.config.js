'use strict';

export function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  
  $urlRouterProvider.otherwise('/home');
}
