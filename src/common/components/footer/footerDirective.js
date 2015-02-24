'use strict';

angular.module('awesome-app.common.components.footer')

.directive('awesomeFooter', function () {

    return {
        restrict: 'E',
        transclude: true,
        scope: {

        },
        templateUrl: '../common/components/footer/footer.tpl.html',
        link: function linkFn (scope, element, attrs) {

        }
    };

});
