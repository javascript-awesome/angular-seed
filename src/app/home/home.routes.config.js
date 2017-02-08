import template from './home.template.html';

export function routeConfig($stateProvider) {
    $stateProvider.
        state('home', {
            url: '^/home',
            controller: 'HomeController',
            template: template
        });
};
