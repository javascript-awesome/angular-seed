'use strict';

describe('awesome-app.home module', function() {
  var $scope;

  beforeEach(module('awesome-app.home'));
  beforeEach(module('awesome-app.common.features.abstract-entity'));
  beforeEach(module('awesome-app.common.features.team-member'));

  beforeEach(function(){
    $scope = {};
  });

  describe('home controller', function(){
    it('should ....', inject(function($controller) {
      //spec body
      var homeCtrl = $controller('HomeCtrl', { $scope: $scope } );
      expect(homeCtrl).toBeDefined();
    }));
  });

});

