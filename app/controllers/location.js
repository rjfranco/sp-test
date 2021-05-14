import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class LocationController extends Controller {
  get service() {
    let { service_id } = this.target.currentRoute.params;
    return this.model.services.findBy('id', service_id);
  }

  get serviceDuration() {
    return this.service.duration;
  }

  get serviceType() {
    return this.service.description;
  }

  @action
  select() {
    alert('Ideally, this would move you toward the next step of the process.');
  }
}
