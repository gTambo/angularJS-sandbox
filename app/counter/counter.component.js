'use strict';

angular.module('counter').
    component('counter', {
        templateUrl: 'counter/counter.template.html',
        controller: function CounterController() {
            this.count = 0;
            this.decrement = function decrement(int) {
                this.count = this.count - int;
            };
            this.increment = function increment(int) {
                this.count = this.count + int;
            };
        }
});