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
            when('/completedTasksView', {
                template: '<completed-tasks-view></completed-tasks-view>'
              }).
            when('/taskview', {
                template: '<task-view></task-view>'
            }).when('/counter', {
                template: '<counter></counter>'
            }).
            otherwise({redirectTo: '/helloworld'});
        }
    ]);