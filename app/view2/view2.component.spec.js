'use strict';

describe('view2 module', function() {

  beforeEach(module('view2'));

  describe('View2Controller', function(){
    let ctrl;

    beforeEach(inject(function($componentController) {
      //spec body
      ctrl = $componentController('view2');
      
      }));
    it('should ....', function() {
      expect(ctrl).toBeDefined();
    });

  });
});