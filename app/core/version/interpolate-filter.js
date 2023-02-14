'use strict';

angular.module('myApp.version.interpolate-filter', [])

.filter('interpolate', ['version', function(version) {
  return function(text) {
    return String(text).replace(/\%VERSION\%/mg, version);
  };
}]);

/**
 *   <p>This is the partial for view 2.</p>
  <p>
    Showing of 'interpolate' filter:
    {{ 'Current version is v%VERSION%.' | interpolate }}
  </p>
 */