import angular from 'angular';
import DataHandler from './datahandler/datahandler.service';

const services = angular.module('app.services', [])

  .service('DataHandler', DataHandler)
  .name;

export default services;
