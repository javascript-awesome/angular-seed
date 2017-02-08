'use strict';

// dependencies
import angular from 'angular';

// controllers
import AboutController from './about.controller';

// configurations
import {routeConfig} from './about.routes.config';

// styles
import './about.styles.scss';

export default angular
  .module('app.about', [])
  .controller('AboutController', AboutController)
  .config(routeConfig);
