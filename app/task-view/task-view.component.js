'use strict';

angular.module('taskView').
    component('taskView', {
        templateUrl: 'task-view/task-view.template.html',
        controller: ['$http', function TaskViewController($http) {
            const self = this;
            let todaysDate = new Date();
            let nextWeek = new Date()
            const reformatDateValues = function(arr){
                for(let item = 0; item < arr.length; item++){
                    arr[item].date = new Date(arr[item].date).toDateString();
                }
                return arr;
            };
            nextWeek.setDate(todaysDate.getDate() + 7);
            
            // self.today = todaysDate;
            self.task = {
                name: '',
                details: '',
                type: '',
                date: todaysDate
            }
            $http.get('http://localhost:5000/alltasks').then(function successCallback(response) {
                self.taskList = reformatDateValues(response.data);
                console.log(response.status, response.statusText + ", got tasks: ", self.taskList);
              }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                console.error(response.status, "ERROR: ", response.statusText);
              });
            self.submit = function(){
                console.log("clicked submit", self.task, "existing tasks", self.taskList);
                
                    self.task.id = self.taskList.length + 1;
                    $http({
                        method: 'POST',
                        url: 'http://localhost:5000/newtask',
                        data: self.task
                    }).then(function successCallback(response) {
                        // this callback will be called asynchronously
                        // when the response is available
                        console.log(response.status, response.statusText);
                        $http.get('http://localhost:5000/alltasks').then(function(response) {
                            self.taskList = reformatDateValues(response.data);
                            console.log(response.status, response.statusText, self.taskList);
                          });
                      }, function errorCallback(response) {
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                        console.error(response.status, "ERROR: ", response.statusText);
                      });
                    self.task = {
                        name: "",
                        details: "",
                        type: "",
                        date: todaysDate
                    }
                }
            self.removeTask = function(item) {
                console.log('removing item: ', item);
                // self.taskList = self.taskList.filter(task => task.item !== item);
                $http.patch('http://localhost:5000/', item).then(function successCallback(response) {
                    // this callback will be called asynchronously
                    // when the response is available
                    console.log(response.status, response.statusText);
                    $http.get('http://localhost:5000/alltasks').then(function(response) {
                        self.taskList = reformatDateValues(response.data);
                        console.log(response.status, response.statusText, self.taskList);
                    });
                }, function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    console.error(response.status, "ERROR: ", response.statusText);
                });
            }
          }]
    });