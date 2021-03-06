import EmberRouter from '@ember/routing/router';
import config from 'sp-test/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('location', { path: '/locations/:service_id' });
});
