'use strict';

angular.module('view2').
    component('view2', {
        templateUrl: 'view2/view2.template.html',
        controller: function View2Controller() {
            let todaysDate = new Date();
            let nextWeek = new Date()
            nextWeek.setDate(todaysDate.getDate() + 7);
              
            this.today = todaysDate;
            this.task = {
                description: 'New Task',
                date: todaysDate
            }
            this.tableData = [
                {
                    id: 1,
                    description: 'Write a to-do list in AngularJS',
                    date: nextWeek
                },
                { 
                    id: 2, 
                    description: 'goodbye', 
                    date: todaysDate
                },
                { 
                    id: 3, 
                    description: 'Paul',
                    date: 'Simon' 
                }
            ];
            this.submit = function(){
                console.log("clicked submit", this.task, "existing tasks", this.tableData);
                if(this.task){
                    this.task.id = this.tableData.length + 1;
                    this.tableData.push(this.task);
                    }
                    this.task = {
                        description: '',
                        date: todaysDate
                    }
            }
          }
    });