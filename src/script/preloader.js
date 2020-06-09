class Preloader {
  constructor() {
    this.element = document.getElementById('js-preloader');
  }

  show() {
    this.element.style.visibility = 'visible';
  }

  hide() {
    this.element.style.visibility = '';
  }
}

export default new Preloader();
