'use strict';

describe('app.about module', function() {
  var $scope = {};
  beforeEach(module('app.about'));

  describe('about controller', function(){
    it('should ....', inject(function($controller) {
      //spec body
      var aboutController = $controller('AboutController', { $scope: $scope });
      expect(aboutController).toBeDefined();
    }));
  });

});

