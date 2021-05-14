import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class LocationController extends Controller {
  @action
  select() {
    alert('Ideally, this would move you toward the next step of the process.');
  }
}
