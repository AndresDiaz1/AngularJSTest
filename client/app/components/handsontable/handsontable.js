import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import handsontableComponent from './handsontable.component';

const handsontableModule = angular.module('handsontable', [
  uiRouter,
])

  .config(($stateProvider) => {
    'ngInject';

    $stateProvider
      .state('handsontable', {
        url: '/handsontable',
        component: 'handsontable',
      });
  })

  .component('handsontable', handsontableComponent)

  .name;

export default handsontableModule;
