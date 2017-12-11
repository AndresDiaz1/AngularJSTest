import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import UserForm from './userform/userform';

const componentModule = angular.module('app.components', [
  Home,
  About,
  UserForm,
])

  .name;

export default componentModule;
