'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'sp-test',
    environment,
    rootURL: '/',
    locationType: 'auto',
    // I would not normally include secrets like this, this is only for testing and I'll
    // probably rotate it fairly soon
    'mapbox-gl': {
      accessToken:
        'pk.eyJ1IjoicmpmcmFuY28iLCJhIjoiY2tvbzExejc5MDVyajJuczFpNmxsbHQ4ZCJ9.60Nl4SVYZrQJWJwGh3isRA',
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      clinicianId: 2,
      portalBaseUrl: 'https://johnny-appleseed.clientsecure.me',
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
