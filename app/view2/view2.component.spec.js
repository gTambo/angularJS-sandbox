'use strict';

describe('view2 module', function() {

  beforeEach(module('view2'));

  describe('View2Controller', function(){
    let ctrl;

    beforeEach(inject(function($componentController) {
      //spec body
      ctrl = $componentController('view2');
      
      }));
    it('should render without crashing', function() {
      expect(ctrl).toBeDefined();
    });

    it('should create a "tableData" model with at least one item', function() {
      
      expect(ctrl.tableData.length).toBeGreaterThan(0);
    });

    

  });
});