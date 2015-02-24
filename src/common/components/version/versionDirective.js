'use strict';

angular.module('awesome-app.common.components.version')

.directive('awesomeAppVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
        elm.text(version);
    };
}]);