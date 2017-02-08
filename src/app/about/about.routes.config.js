import template from './about.template.html';

export function routeConfig($stateProvider) {
    $stateProvider.
        state('about', {
            url: '^/about',
            controller: 'AboutController',
            template: template
        });
};
