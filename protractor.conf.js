// Protractor configuration
// https://github.com/angular/protractor/blob/master/referenceConf.js

const config = {
  // The timeout for each script run on the browser. This should be longer
  // than the maximum time your application needs to stabilize between tasks.
  allScriptsTimeout: 110000,

  // A base URL for your application under test. Calls to protractor.get()
  // with relative paths will be prepended with this.
  baseUrl: `http://localhost:${process.env.PORT || 3000}`,

  // Selenium WebDriver address
  seleniumAddress: 'http://localhost:4444/wd/hub',

  // list of files / patterns to load in the browser
  // specs: [
  //   'e2e/**/*.e2e.js',
  // ],

  // list of test suites
  suites: {
    all: [
      'e2e/home/*.e2e.js',
      'e2e/about/*.e2e.js',
    ],
  },

  // default suite to run
  suite: 'all',

  // Patterns to exclude.
  exclude: [],

  // ----- Capabilities to be passed to the webdriver instance ----
  //
  // For a full list of available capabilities, see
  // https://code.google.com/p/selenium/wiki/DesiredCapabilities
  // and
  // https://code.google.com/p/selenium/source/browse/javascript/webdriver/capabilities.js
  capabilities: {
    browserName: 'chrome',
    name: 'NG6 e2e',
  },

  // ----- The test framework -----
  //
  // Jasmine and Cucumber are fully supported as a test and assertion framework.
  // Mocha has limited beta support. You will need to include your own
  // assertion framework if working with mocha.
  framework: 'jasmine2',

  // ----- Options to be passed to minijasminenode -----
  //
  // See the full list at https://github.com/jasmine/jasmine-npm
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
    showColors: true,
    print: function () {}, // for jasmine-spec-reporter
  },

  // Prepare environment for tests
  params: {},

  onPrepare: function () {
    require('babel-register');
    const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
    // add jasmine spec reporter
    jasmine.getEnv().addReporter(new SpecReporter({ displayStacktrace: true }));
  },
};

config.params.baseUrl = config.baseUrl;
exports.config = config;
