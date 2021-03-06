// Karma configuration
// Generated on Fri Jun 27 2014 10:13:59 GMT-0500 (CDT)

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '',


    // frameworks to use
    frameworks: ['qunit'],

    plugins: [
      'karma-qunit',
      'karma-chrome-launcher',
      'karma-ember-preprocessor',
      'karma-phantomjs-launcher'
    ],

    preprocessors: {
      "**/*.handlebars": 'ember'
    },

    // list of files / patterns to load in the browser
    files: [
      "bower_components/jquery/jquery.min.js",
      "bower_components/handlebars/handlebars.js",
      "bower_components/ember/ember.js",
      "bower_components/jquery-mockjax/jquery.mockjax.js",
      "app.js",
      "tests/*.js",
      "templates/*.handlebars"
    ],


    // list of files to exclude
    exclude: [

    ],

    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'``
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: ['PhantomJS'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
