import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import userformComponent from './userform.component';

const userformModule = angular.module('userform', [
  uiRouter,
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
