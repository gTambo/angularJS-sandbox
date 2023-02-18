'use strict';

describe('completedTasksView module', function() {

  beforeEach(module('completedTasksView'));

  describe('CompletedTasksCtrl', function(){
    let $httpBackend;
    let ctrl;

    beforeEach(inject(function($componentController, _$httpBackend_) {
      //spec body
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('http://localhost:5000/alltasks')
                  .respond([{ 
                              id: 1, 
                              name: 'task1', 
                              details: 'example', 
                              type: '', 
                              date: 'Thu Feb 16 2023 15:07:16 GMT-0600 (Central Standard Time)'
                            }]);
      ctrl = $componentController('completedTasksView');
    
    }));

    it('should render without crashing', inject(function($componentController) {
      
      expect(ctrl).toBeDefined();
    }));

  });
});