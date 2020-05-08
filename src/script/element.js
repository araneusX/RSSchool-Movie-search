export default class {
  constructor(element) {
    this.element = element;
  }

  addListener(event, callback, options) {
    this.element.addEventListener(event, callback, options);
  }

  removeListener(event, callback) {
    this.element.removeEventListener(event, callback);
  }

  addClass(...classes) {
    this.element.classList.add(...classes);
  }

  removeClass(...classes) {
    this.element.classList.remove(...classes);
  }

  get style() {
    return this.element.style;
  }

  set style(value) {
    this.element.style = value;
  }

  get value() {
    return this.element.value;
  }

  set value(value) {
    this.element.value = value;
  }
}