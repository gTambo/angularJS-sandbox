'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /completedTasksView when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/completedTasksView");
  });


  describe('completedTasksView', function() {

    beforeEach(function() {
      browser.get('index.html#!/completedTasksView');
    });


    it('should render completedTasksView when user navigates to /completedTasksView', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('task-view', function() {

    beforeEach(function() {
      browser.get('index.html#!/task-view');
    });


    it('should render task-view when user navigates to /task-view', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
