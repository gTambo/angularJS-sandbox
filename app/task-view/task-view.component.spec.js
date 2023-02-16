'use strict';

describe('taskView module', function() {

  beforeEach(module('taskView'));

  describe('TaskViewController', function(){
    let ctrl;

    beforeEach(inject(function($componentController) {
      //spec body
      ctrl = $componentController('taskView');
      
      }));
    it('should render without crashing', function() {
      expect(ctrl).toBeDefined();
    });

    it('should create a "tableData" model with at least one item', function() {
      
      expect(ctrl.tableData.length).toBeGreaterThan(0);
    });



  });
});