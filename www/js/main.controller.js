angular.module('app')
  .controller('MainController', MainController);

function MainController() {
  this.cp = (new Date().getYear() + 1900) > 2015 ? '2015 - ' + year : '2015';
  this.author = 'Aldo Ziflaj'
};
