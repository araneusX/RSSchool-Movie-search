import { keys, firstInRow } from './constants';
import Key from './key';
import language from './userLanguage';
import state from './state';
import './style.css';


export default class {
  constructor(rootElement, inputElem, onEnterCallback) {
    this.isShow = false;
    const innerContainer = rootElement;
    const input = inputElem;
    this.input = inputElem;
    this.container = document.createElement('div');
    this.container.classList.add('container');

    let isShiftLeft;

    let isCapsLock = false;
    let inTimeout = false;

    const keyboard = {};

    let activeKeys = [];

    /* service */

    const setNewLanguage = () => {
      if (!inTimeout) {
        Object.keys(keyboard).forEach((i) => {
          keyboard[i].languageToggle();
        });
        language.change();
        inTimeout = true;
        setTimeout(() => { inTimeout = false; }, 100);
      }
    };

    input.insertText = function insertText(text) {
      this.setRangeText(text, input.selectionStart, input.selectionEnd, 'end');
    };

    const setUpperCase = () => {
      Object.keys(keyboard).forEach((i) => {
        keyboard[i].nameToUpperCase();
      });
    };

    const setLowerCase = () => {
      Object.keys(keyboard).forEach((i) => {
        keyboard[i].nameToLowerCase();
      });
    };

    const keyboardRenderCase = () => {
      if (isShiftLeft + isCapsLock === 1) {
        setUpperCase();
      } else {
        setLowerCase();
      }
    };

    this.clearActions = () => {
      isShiftLeft = false;
      keyboard.ShiftLeft.DOMElement.classList.remove('pressed');
      keyboardRenderCase();
    };

    /* keyboard functions */

    const printChar = (key) => {
      let char = isShiftLeft
        ? keyboard[key].modContent[language.getCurrent()]
        : keyboard[key].content[language.getCurrent()];
      if (isCapsLock) {
        char = isShiftLeft
          ? char.toLowerCase()
          : char.toUpperCase();
      }
      input.insertText(char);
    };

    const deletePrevious = () => {
      if (input.selectionStart === input.selectionEnd) {
        if (input.selectionStart > 0) {
          input.setRangeText('', input.selectionStart - 1, input.selectionEnd, 'end');
        }
      } else {
        input.insertText('');
      }
    };

    const deleteNext = () => {
      if (input.selectionStart === input.selectionEnd) {
        if (input.selectionStart < input.value.length) {
          input.setRangeText('', input.selectionStart, input.selectionEnd + 1, 'end');
        }
      } else {
        input.insertText('');
      }
    };

    const moveHorizontal = (delta) => {
      let newPosition = input.selectionEnd + delta;
      if (newPosition < 0) newPosition = 0;
      if (newPosition > input.value.length) newPosition = input.value.length;
      input.setSelectionRange(newPosition, newPosition);
    };

    /* dispatchers */

    const startAction = (key) => {
      switch (key) {
        case 'ShiftLeft':
          isShiftLeft = true;
          keyboardRenderCase();
          break;
        case 'Backspace':
          deletePrevious();
          break;
        case 'Delete':
          deleteNext();
          break;
        case 'ArrowLeft':
          moveHorizontal(-1);
          break;
        case 'ArrowRight':
          moveHorizontal(1);
          break;
        case 'CapsLock':
          isCapsLock = !isCapsLock;
          keyboard.CapsLock.DOMElement.classList.toggle('caps');
          keyboardRenderCase();
          break;
        case 'Lang':
          setNewLanguage();
          break;
        default:
      }
    };

    const stopAction = (key) => {
      switch (key) {
        case 'ShiftLeft':
          if (isShiftLeft) {
            isShiftLeft = false;
          }
          keyboardRenderCase();
          break;
        case 'Enter':
          onEnterCallback();
          break;
        default:
      }
    };

    /* drivers */

    const emulateKeyDown = (code) => {
      if (keyboard[code]) {
        input.focus();
        keyboard[code].DOMElement.classList.add('pressed');
        if (keyboard[code].type === 'action') {
          startAction(code);
          return;
        }
        printChar(code);
      }
    };

    const emulateKeyUp = (code) => {
      if (keyboard[code]) {
        keyboard[code].DOMElement.classList.remove('pressed');
        if (keyboard[code].type === 'action') {
          stopAction(code);
        }
      }
    };


    const clearKeysStack = () => {
      while (activeKeys.length > 0) {
        emulateKeyUp(activeKeys.pop());
      }
    };

    const mouseWatch = () => {
      const timeout = setTimeout(() => {
        if (state.currentKey && state.currentKey !== activeKeys[activeKeys.length - 1]) {
          emulateKeyUp(activeKeys.pop());
          activeKeys.push(state.currentKey);
          emulateKeyDown(state.currentKey);
        }
        const interval = setInterval(() => {
          if (state.currentKey) {
            emulateKeyUp(activeKeys.pop());
            activeKeys.push(state.currentKey);
            emulateKeyDown(state.currentKey);
          }
        }, 60);
        this.container.addEventListener('mouseup', () => { clearInterval(interval); }, { once: true });
        this.container.addEventListener('mouseleave', () => { clearInterval(interval); }, { once: true });
      }, 300);
      this.container.addEventListener('mouseup', () => { clearTimeout(timeout); }, { once: true });
      this.container.addEventListener('mouseleave', () => { clearTimeout(timeout); }, { once: true });
    };

    this.onMouseDown = (event) => {
      event.stopPropagation();
      if (event.target.closest('[data-keycode]')) {
        const code = event.target.closest('[data-keycode]').dataset.keycode;
        activeKeys.push(code);
        emulateKeyDown(code);
        if (event.which === 1) {
          mouseWatch();
        }
      }
    };

    this.onMouseUp = (event) => {
      input.focus();
      if (event.which === 3
        && activeKeys[0] === 'ShiftLeft'
        && activeKeys.length === 1) {
        return;
      }

      if (event.which === 3
        && activeKeys[0] === 'ShiftLeft'
        && activeKeys.length === 2) {
        if (activeKeys[1] === 'ShiftLeft') {
          if (activeKeys[0] === activeKeys[1]) {
            emulateKeyUp(activeKeys.pop());
            activeKeys = [];
          } else {
            activeKeys.shift();
          }
        } else {
          emulateKeyUp(activeKeys.pop());
        }
      } else {
        clearKeysStack();
      }
    };

    /* fill keyboard */

    const fillKeyboard = () => {
      let keysRow;
      keys.forEach((i) => {
        keyboard[i[2]] = new Key(...i);
        if (firstInRow.includes(i[2])) {
          keysRow = document.createElement('div');
          keysRow.classList.add('row');
          this.container.appendChild(keysRow);
        }
        keysRow.appendChild(keyboard[i[2]].DOMElement);
      });
    };
    fillKeyboard();

    /* base */

    innerContainer.appendChild(this.container);

    this.container.addEventListener('contextmenu', (e) => { e.preventDefault(); });
    this.container.addEventListener('click', (e) => { e.stopPropagation(); });
    window.addEventListener('blur', this.clearActions);
  }

  show() {
    if (!this.isShow) {
      this.container.classList.add('visible');
      this.container.addEventListener('mousedown', this.onMouseDown);
      document.addEventListener('mouseup', this.onMouseUp);
      this.isShow = true;
      this.input.focus();
    }
  }

  hide() {
    if (this.isShow) {
      this.container.classList.remove('visible');
      this.container.removeEventListener('mousedown', this.onMouseDown);
      document.removeEventListener('mouseup', this.onMouseUp);
      this.clearActions();
      this.isShow = false;
    }
  }

  toggle() {
    if (this.isShow) {
      this.hide();
    } else {
      this.show();
    }
  }
}
