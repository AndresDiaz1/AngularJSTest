import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import ngStorage from 'ngstorage';

import userformComponent from './userform.component';

const userformModule = angular.module('userform', [
  uiRouter,
  'ngStorage',
])

  .config(($stateProvider) => {
    'ngInject';

    $stateProvider
      .state('userform', {
        url: '/userform',
        component: 'userform',
      });
  })

  .component('userform', userformComponent)

  .name;

export default userformModule;
