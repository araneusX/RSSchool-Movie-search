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

  set content(value) {
    while (this.element.firstChild) {
      this.element.removeChild(this.element.firstChild);
    }

    if (value instanceof Array) {
      value.forEach((item) => {
        if (item instanceof HTMLElement) {
          this.element.append(item);
        } else {
          this.element.append(document.createTextNode(item));
        }
      });
    } else if (value instanceof HTMLElement) {
      this.element.append(value);
    } else {
      this.element.append(document.createTextNode(value));
    }
  }
}
