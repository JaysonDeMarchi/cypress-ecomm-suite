const fs = require('fs-extra');
const path = require('path');

module.exports = (on, config) => {
  const configFile = config.env.configFile || 'config/local.json';

  return fs.readJson(
    path.resolve(configFile)
  );
}
