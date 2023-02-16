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
                name: '',
                details: '',
                type: '',
                date: todaysDate
            }
            this.tableData = [
                {
                    id: 1,
                    name: "Write a to-do list in AngularJS",
                    details: "That's what this is...",
                    type: "",
                    date: nextWeek
                }, { 
                    id: 2, 
                    name: "Do stuff",
                    details: "Any-stuff",
                    type: "",
                    date: todaysDate
                }, { 
                    id: 3, 
                    name: "Delete this task",
                    details: "click the check-box under 'Done'",
                    type: "",
                    date: todaysDate
                }
            ];
            this.submit = function(){
                console.log("clicked submit", this.task, "existing tasks", this.tableData);
                if(this.task){
                    this.task.id = this.tableData.length + 1;
                    this.tableData.push(this.task);
                    }
                    this.task = {
                        name: "",
                        details: "",
                        type: "",
                        date: todaysDate
                    }
            }
            this.removeTask = function(id) {
                console.log('removing item: ', id);
                this.tableData = this.tableData.filter(task => task.id !== id);
            }
          }
    });