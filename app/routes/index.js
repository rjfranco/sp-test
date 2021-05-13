import ENV from 'sp-test/config/environment';
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service store;

  model() {
    let { clinicianId } = ENV.APP;
    return this.store.query('cptCode', { filter: { clinicianId } });
  }
}
