'use strict';

describe('taskView module', function() {

  beforeEach(module('taskView'));

  describe('TaskViewController', function(){
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
      ctrl = $componentController('taskView');
      
      }));
    it('should render without crashing', function() {
      expect(ctrl).toBeDefined();
    });

    it('should create a `taskList` property with a task fetched with `$http`', function() {
      expect(ctrl.taskList).toBeUndefined();
    
      $httpBackend.flush();
      expect(ctrl.taskList).toEqual([{ 
        id: 1, 
        name: 'task1', 
        details: 'example', 
        type: '', 
        date: 'Thu Feb 16 2023'
      }]);
    });

  });
});