'use strict';

angular.module('awesome-app.common.components.version')

.filter('versionInterpolate', ['version', function(version) {
    return function(text) {
        return String(text).replace(/%VERSION%/mg, version);
    };
}]);