'use strict';

describe('Controller: ListReposCtrl', function () {

  // load the controller's module
  beforeEach(module('gitHubReposCtlgApp'));

  var ListReposCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListReposCtrl = $controller('ListReposCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
