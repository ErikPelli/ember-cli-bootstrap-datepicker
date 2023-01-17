'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');
const path = require('path');

module.exports = function (defaults) {
  const app = new EmberAddon(defaults, {
    // Add options here
  });

  app.import(path.join('node_modules/bootstrap/dist/css/bootstrap.css'));
  app.import(path.join('node_modules/bootstrap/dist/css/bootstrap.css.map'), {
    destDir: 'assets'
  });

  app.import(path.join('vendor/bootstrap-datepicker-locales/bootstrap-datepicker.de.min.js'));

  const { maybeEmbroider } = require('@embroider/test-setup');
  return maybeEmbroider(app, {
    skipBabel: [
      {
        package: 'qunit',
      },
    ],
  });
};
