'use strict';

// dependencies
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';

// configurations
import {routesConfig} from './app.routes.config';

// modules
import '../common/common.module';
import './home/home.module';
import './about/about.module';

// styles
import './app.styles.scss';

angular
  .module('app', [
    uiRouter,
    uiBootstrap,
    'app.common',
    'app.home',
    'app.about'
  ])
  .config(routesConfig);
