'use strict';

describe('view1 module', function() {

  beforeEach(module('view1'));

  describe('View1Ctrl', function(){
    let ctrl;

    it('should ....', inject(function($componentController) {
      //spec body
      // var scope = {};
      ctrl = $componentController('view1');
      
      expect(ctrl).toBeDefined();
    }));

  });
});