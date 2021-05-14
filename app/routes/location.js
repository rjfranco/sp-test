import ENV from 'sp-test/config/environment';
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class LocationRoute extends Route {
  @service store;

  model({ service_id: cptCodeId }) {
    let { clinicianId } = ENV.APP;
    return this.store.query('office', { filter: { clinicianId, cptCodeId } });
  }
}
