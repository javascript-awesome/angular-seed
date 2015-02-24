'use strict';

angular.module('awesome-app.common.components.header')

.directive('awesomeHeader', function () {

    return {
        restrict: 'E',
        transclude: true,
        scope: {
            title: '@awesomeHeaderTitle',
            homeState: '@awesomeHeaderHomeState'
        },
        templateUrl: '../common/components/header/header.tpl.html',
        link: function linkFn (scope, element, attrs) {

        }
    };

});
