'use strict';

angular.module('taskView').
    component('taskView', {
        templateUrl: 'task-view/task-view.template.html',
        controller: ['$http', function TaskViewController($http) {
            let todaysDate = new Date();
            let nextWeek = new Date()
            nextWeek.setDate(todaysDate.getDate() + 7);
            let self = this;
            // self.today = todaysDate;
            self.task = {
                name: '',
                details: '',
                type: '',
                date: todaysDate
            }
            $http.get('tasks/tasks.json').then(function(response) {
                self.taskList = response.data;
                console.log(response.status, response.statusText + ", got tasks: ", self.taskList);
              });
            self.submit = function(){
                console.log("clicked submit", self.task, "existing tasks", self.taskList);
                
                    self.task.id = self.taskList.length + 1;
                    $http({
                        method: 'POST',
                        url: 'app/tasks/tasks.json',
                        data: self.task
                    }).then(function successCallback(response) {
                        // this callback will be called asynchronously
                        // when the response is available
                        $http.get('tasks/tasks.json').then(function(response) {
                            self.taskList = response.data;
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
            self.removeTask = function(id) {
                console.log('removing item: ', id);
                self.taskList = self.taskList.filter(task => task.id !== id);
            }
          }]
    });