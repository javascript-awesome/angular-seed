'use strict';

import angular from 'angular';

import './components/components.module';
import './features/features.module';

angular.module('app.common', [
    'app.common.features',
    'app.common.components'
]);
