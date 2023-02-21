'use strict';

describe('counter module', function() {
    
    beforeEach(module('counter'));

    describe('counter controller', function() {
        let counterCtrl;
        beforeEach(inject(function($componentController) {
            counterCtrl = $componentController('counter');
        }));
        it('should exist', function() {
            // spec body
            expect(counterCtrl).toBeDefined();
        });
        
        it('should initiate a counter equal to 0', function() {
            expect(counterCtrl.count).toEqual(0);
        });
    });
});