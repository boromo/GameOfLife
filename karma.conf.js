// Karma configuration
// Generated on Sun Jun 07 2015 10:19:20 GMT+0200 (W. Europe Summer Time)

module.exports = function(config) {
    config.set({

        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine', 'requirejs'],


        // list of files / patterns to load in the browser
        files: [
            {pattern: 'src/**/*.js', included: false},
            {pattern: 'test/**/*Spec.js', included: false},
            'test/test-main.js'
        ],


        // list of files to exclude
        exclude: [
            'src/js/main.js'
        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            // source files, that you wanna generate coverage for
            // do not include tests or libraries
            // (these files will be instrumented by Istanbul)
            'src/**/*.js': ['coverage']
        },

        // optionally, configure the reporter
        coverageReporter: {
            type : 'html',
            dir : 'coverage/'
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'html', 'coverage'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS', 'Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });
};
