import ApplicationSerializer from './application';

export default class CptCodeSerializer extends ApplicationSerializer {
  keyForAttribute(attr) {
    return attr;
  }
}
