'use strict';

angular.module('view1').
    component('view1', {
        templateUrl: 'view1/view1.template.html',
        controller: function View1Ctrl() {
            this.page = 'text here';
    }
});