'use strict';

angular.
    module('myApp').
    config(['$locationProvider', '$routeProvider', 
        function($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider.
            when('/helloworld', {
                template: '<hello-world></hello-world>'
            }).
            when('/view1', {
                template: '<view1></view1>'
              }).
            when('/view2', {
                template: '<view2></view2>'
            }).
            otherwise({redirectTo: '/helloworld'});
        }
    ]);