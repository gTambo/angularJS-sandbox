angular.module('myApp.helloWorld', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/helloworld', {
      templateUrl: 'helloWorld/helloWorld.template.html',
      controller: 'HelloWorld'
    });
  }]).controller('HelloWorld', [function(){
    
  }]);