exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    ignoreUncaughtExceptions: true,
    baseUrl: 'http://wwww.google.com.br',
    specs: ['features/*.feature'],
    capabilities: {
      browserName: 'chrome'
    },
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts: {
      require: 'features/step_definitions/*.steps.js',
      tags: ['~@NaoImplementado'],
      format: ['json:results.json'],
      profile: false,
      ignoreUndefinedDefinitions: true,
      'no-source': true,
    },
  };
  