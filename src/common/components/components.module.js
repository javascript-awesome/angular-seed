'use strict';

import './version/version.module';

import {HeaderDirective} from './header/header.directive';
import {FooterDirective} from './footer/footer.directive';

angular.module('app.common.components', [
        'app.common.components.version'
    ])
    .directive('awesomeHeader', () => new HeaderDirective())
    .directive('awesomeFooter', () => new FooterDirective());
