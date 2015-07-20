'use strict';

var pkg = require('../package.json');

require('glob')(
  'src/**/*.spec.js',
  function globTestFiles(err, files) {
    if(err) {
      throw err;
    }

    if(!files.length) {
      throw new Error('No test files');
    }

    var config = require('../webpack.test.config');

    config.entry = files.map(function mapFiles(file) {
      return './' + file;
    });

    console.log(config.entry);

    config.output.filename = 'test.js';

    // build a single tests.js
    require('webpack')(config, function buildTest(err, stats) {
      if(err) {
        throw err;
      }

      var jsonStats = stats.toJson();

      if(jsonStats.errors.length > 0) {
        throw new Error('build-test: soft error detected: ' + jsonStats.errors);
      }

      if(jsonStats.warnings.length > 0) {
        console.warn('build-test: warning detected: ' + jsonStats.errors);
      }

      console.log('build-test: ' + config.output.filename + ' ready');

    });

  }
);