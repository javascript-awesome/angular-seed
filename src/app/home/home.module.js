// dependencies
import angular from 'angular';

// controllers
import HomeController from './home.controller';

// configurations
import {routeConfig} from './home.routes.config';

// styles
import './home.styles.scss';

export default angular
  .module('app.home', [])
  .controller('HomeController', HomeController)
  .config(routeConfig);
