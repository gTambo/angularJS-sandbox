'use strict';

angular.module('view2').
    component('view2', {
        templateUrl: 'view2/view2.template.html',
        controller: function View2Controller() {
            this.tableData = [
                {
                    id: 'Row-1',
                    column1: 'hello',
                    column2: 'world'
                },
                { 
                    id: 'Row-2', 
                    column1: 'goodbye', 
                    column2: 'happiness' 
                },
                { 
                    id: 'Row-3', 
                    column1: 'Paul',
                    column2: 'Simon' 
                }
            ];
          }
    });