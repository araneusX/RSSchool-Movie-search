import { stretchKeys } from './constants';
import language from './userLanguage';
import state from './state';

const getDOMContent = (content) => {
  const DOMElement = document.createElement('span');
  if (content.length === 2) {
    const firstChar = document.createElement('span');
    const secondChar = document.createElement('span');
    firstChar.innerHTML = `${content[0]}`;
    secondChar.innerHTML = `${content[1]}`;
    firstChar.classList.add('firstChar');
    secondChar.classList.add('secondChar');
    DOMElement.appendChild(firstChar);
    DOMElement.appendChild(secondChar);
  } else {
    DOMElement.innerText = content;
  }
  return DOMElement;
};


export default class {
  constructor(
    type,
    isMutable,
    keyCode,
    enName,
    enContent,
    enModContent,
    ruName,
    ruContent,
    ruModContent,
  ) {
    this.type = type;
    this.isMutable = isMutable;
    this.DOMContent = {
      en: getDOMContent(enName),
    };

    if (type === 'char') {
      this.content = {
        en: enContent,
        ru: ruContent || enContent,
      };
      this.modContent = {
        en: enModContent || enContent,
        ru: ruModContent || ruContent || enModContent || enContent,
      };
      this.DOMContent.ru = getDOMContent(ruName || enName);
    }

    this.DOMElement = document.createElement('div');
    this.DOMElement.classList.add('key');
    this.DOMElement.setAttribute('data-keycode', keyCode);
    this.DOMElement
      .appendChild(type === 'char' ? this.DOMContent[language.getCurrent()] : this.DOMContent.en);

    this.nameToLowerCase();

    this.DOMElement.addEventListener('mouseenter', () => {
      state.currentKey = keyCode;
    });

    this.DOMElement.addEventListener('mouseleave', () => {
      state.currentKey = false;
    });

    if (stretchKeys.includes(keyCode)) {
      this.DOMElement.classList.add('stretch');
    }
  }

  languageToggle() {
    if (this.type === 'char') {
      this.DOMElement
        .replaceChild(this.DOMContent[language.getNext()], this.DOMContent[language.getCurrent()]);
    }
  }

  nameToUpperCase() {
    if (this.isMutable) {
      this.DOMElement.classList.remove('lowercase');
    }
  }

  nameToLowerCase() {
    if (this.isMutable) {
      this.DOMElement.classList.add('lowercase');
    }
  }
}
