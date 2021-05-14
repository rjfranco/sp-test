import ENV from 'sp-test/config/environment';
import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import { inject as service } from '@ember/service';

export default class LocationRoute extends Route {
  @service store;

  model({ service_id: cptCodeId }) {
    let { clinicianId } = ENV.APP;
    let locations = this.store.query('office', {
      filter: { clinicianId, cptCodeId },
    });
    let services = this.store.query('cptCode', { filter: { clinicianId } });
    return hash({ locations, services });
  }
}
