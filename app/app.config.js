'use strict';

angular.
    module('myApp').
    config(['$locationProvider', '$routeProvider', 
        function($locationProvider, $routeProvider) {
            // $locationProvider.hashPrefix('!');

            $routeProvider.
            when('/helloworld', {
                template: '<hello-world></hello-world>'
            }).
            when('/view1', {
                template: '<view-1></view-1>'
              }).
            when('/taskview', {
                template: '<task-view></task-view>'
            }).
            otherwise({redirectTo: '/helloworld'});
        }
    ]);