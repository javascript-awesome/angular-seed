'use strict';

import {HeaderDirective} from './header/header.directive';
import {FooterDirective} from './footer/footer.directive';

angular.module('app.common.components', [

    ])
    .directive('awesomeHeader', () => new HeaderDirective())
    .directive('awesomeFooter', () => new FooterDirective());
