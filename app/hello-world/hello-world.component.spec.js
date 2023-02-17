'use strict';

describe('helloWorld module', function() {
    
    beforeEach(module('helloWorld'));

    describe('helloWorld controller', function() {
        it('should....', inject(function($componentController) {
            // spec body
            var helloWorldCtrl = $componentController('helloWorld');
            expect(helloWorldCtrl).toBeDefined();
        }));
    });
});