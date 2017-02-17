'use strict';

import angular from 'angular';

import {VersionDirective} from './version.directive';
import {versionInterpolate} from './version.filter';

const version = '0.2';

angular.module('app.common.components.version', [])
       .directive('awesomeAppVersion', () => new VersionDirective(version))
       .filter('versionInterpolate', () => versionInterpolate(version));