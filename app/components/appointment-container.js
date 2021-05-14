import Component from '@glimmer/component';

export default class AppointmentContainerComponent extends Component {
  get isLocation() {
    return this.args.step === '2';
  }

  get isService() {
    return this.args.step === '1';
  }
}
