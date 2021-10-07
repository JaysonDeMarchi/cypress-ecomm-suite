const browserify = require('@cypress/browserify-preprocessor');
const cucumber = require('cypress-cucumber-preprocessor').default;
const fs = require('fs-extra');
const path = require('path');
const resolve = require('resolve');

module.exports = (on, config) => {
  const configFile = config.env.configFile || 'config/local.json';
  const options = {
    ...browserify.defaultOptions,
    typescript: resolve.sync('typescript', { baseDir: config.projectRoot }),
  };

  on('file:preprocessor', cucumber(options));

  return fs.readJson(
    path.resolve(configFile)
  );
}
