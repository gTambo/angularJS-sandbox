'use strict';

describe('counter module', function() {
    
    beforeEach(module('counter'));

    describe('counter controller', function() {
        it('should....', inject(function($componentController) {
            // spec body
            var counterCtrl = $componentController('counter');
            expect(counterCtrl).toBeDefined();
        }));
    });
});