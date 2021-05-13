import ENV from 'sp-test/config/environment';
import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  headers = {
    'Api-Version': '2020-01-01',
    'Application-Build-Version': '0.0.1',
    'Application-Platform': 'web',
  };

  // This is commented out in order to make the proxy work, with
  // this in place ember ignores proxy settings
  // host = ENV.APP.portalBaseUrl;

  namespace = 'client-portal-api';
}
