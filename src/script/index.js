import '../css/style.scss';
import Element from './element';
import Preloader from './preloader';

const runApp = () => {
  const preloader = new Preloader();
  preloader.show();
  preloader.addListener('click', () => preloader.hide());

  const form = new Element(document.getElementById('js-form'));
  form.addListener('submit', (e) => { e.preventDefault(); });
};

document.addEventListener('DOMContentLoaded', runApp);
