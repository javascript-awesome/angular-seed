'use strict';

export function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {  
  $urlRouterProvider.otherwise('/home');
}
