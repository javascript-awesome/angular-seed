'use strict';

describe('awesome-app.home module', function() {

    beforeEach(module('awesome-app.home'));

    describe('home controller', function(){

        it('should ....', inject(function($controller) {
            //spec body
            var homeCtrl = $controller('HomeCtrl');
            expect(homeCtrl).toBeDefined();
        }));

    });
});

