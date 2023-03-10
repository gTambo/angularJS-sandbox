'use strict';

angular.module('completedTasksView').
    component('completedTasksView', {
        templateUrl: 'completed-tasks-view/completed-tasks.template.html',
        controller: ['$http', function CompletedTasksCtrl($http) {
            const self = this;
            const reformatDateValues = function(arr){
                for(let item = 0; item < arr.length; item++){
                    arr[item].date = new Date(arr[item].date).toDateString();
                }
                return arr;
            };

            self.page = 'text here';

            $http.get('http://localhost:5000/completedtasks').then(function successCallback(response) {
            self.completedTaskList = reformatDateValues(response.data);

            console.log(response.status, response.statusText + ", got tasks: ", self.completedTaskList);
          }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.error(response.status, "ERROR: ", response.statusText);
          });
    }]
});