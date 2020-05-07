import Element from './element';

export default class extends Element {
  constructor() {
    super (document.getElementById('js-preloader'));
  }

  show() {
    this.style.display = 'block';
  }

  hide() {
    this.style.display = '';
  }
}