import Model, { attr } from '@ember-data/model';

export default class OfficeModel extends Model {
  @attr name;
  @attr phone;
  @attr isVideo;
  @attr geolocation; // Shaped like { lat: string, long: string }
  @attr isPublic;
}
