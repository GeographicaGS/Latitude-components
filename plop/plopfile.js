const defaultConfig = require('./config');
const {
  init,
} = require('./utils/init');
const componentGenerator = require('./component/component.generator');

module.exports = (plop, config) => {
  const currentConfig = Object.assign(defaultConfig, config || {});

  init(currentConfig.path);
  componentGenerator(plop, currentConfig);
};
