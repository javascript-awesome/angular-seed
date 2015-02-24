'use strict';

angular.module('awesome-app.about', ['ui.router']).

config(function config($stateProvider) {

    $stateProvider
        .state('about', {
            url: '^/about',
            controller: 'AboutCtrl',
            templateUrl: 'about/about.tpl.html'
        });
});