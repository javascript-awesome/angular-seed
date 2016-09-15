module.exports = function(config){
  config.set({

    basePath : './',

    frameworks: ['jasmine'],

    files : [
      'vendor/angular/angular.js',
      'vendor/angular-route/angular-route.js',
      'vendor/angular-mocks/angular-mocks.js',
      'vendor/angular-ui-router/release/angular-ui-router.js',
      'src/app/**/*.js',
      'src/common*/**/*.js'
    ],

    autoWatch : true,

    browsers : ['PhantomJS'],

    phantomjsLauncher: {
      // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
      exitOnResourceError: true
    },

    singleRun: true,

    plugins : [
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
