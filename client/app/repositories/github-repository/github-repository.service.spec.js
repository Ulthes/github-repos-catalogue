'use strict';

describe('Service: githubRepository', function () {

  // load the service's module
  beforeEach(module('gitHubReposCtlgApp'));

  // instantiate service
  var githubRepository;
  beforeEach(inject(function (_githubRepository_) {
    githubRepository = _githubRepository_;
  }));

  it('should do something', function () {
    expect(!!githubRepository).toBe(true);
  });

});
