'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', function($scope) {
  $scope.tableData = [
    {
      id: 'Row-1',
      column1: 'hello',
      column2: 'world'
    },
    { id: 'Row-2', column1: 'goodbye', column2: 'happiness' },
    { id: 'Row-3', column1: 'Paul', column2: 'Simon' }
  ];
});