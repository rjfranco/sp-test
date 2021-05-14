import Component from '@glimmer/component';

export default class AppointmentContainerComponent extends Component {
  get hasServiceOptions() {
    return this.args.serviceType && this.args.serviceDuration;
  }

  get isLocation() {
    return this.args.step === '2';
  }

  get isService() {
    return this.args.step === '1';
  }
}
