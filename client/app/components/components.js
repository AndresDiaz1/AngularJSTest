import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import UserForm from './userform/userform';
import HandsonTable from './handsontable/handsontable';

const componentModule = angular.module('app.components', [
  Home,
  About,
  UserForm,
  HandsonTable,
])

  .name;

export default componentModule;
