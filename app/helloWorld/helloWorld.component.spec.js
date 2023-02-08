'use strict';

describe('myApp.helloWorld module', function() {
    
    beforeEach(module('myApp.helloWorld'));

    describe('helloWorld controller', function() {
        it('should....', inject(function($controller) {
            // spec body
            var helloWorldCtrl = $controller('HelloWorld');
            expect(helloWorldCtrl).toBeDefined();
        }));
    });
});