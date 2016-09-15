'use strict';

describe('awesome-app.about module', function() {
  var $scope = {};
  beforeEach(module('awesome-app.about'));

  describe('about controller', function(){
    it('should ....', inject(function($controller) {
      //spec body
      var aboutCtrl = $controller('AboutCtrl', { $scope: $scope });
      expect(aboutCtrl).toBeDefined();
    }));
  });

});

