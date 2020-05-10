import Element from './element';

export default class extends Element {
  constructor() {
    super(document.getElementById('js-preloader'));
  }

  show() {
    this.style.visibility = 'visible';
  }

  hide() {
    this.style.visibility = '';
  }
}
