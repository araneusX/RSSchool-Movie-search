import Element from './element';

class Preloader extends Element {
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

export default new Preloader();
