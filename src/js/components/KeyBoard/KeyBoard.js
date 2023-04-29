import createFromTemplate from '../../functions/createFromTemplate';
import keys from '../../config';
import './style.scss';

class KeyBoard {
  constructor(container, area, locale = 'ru-RU') {
    // eslint-disable-next-line no-undef
    this.container = document.querySelector(`${container}`);
    // eslint-disable-next-line no-undef
    this.area = document.querySelector(`${area}`);
    this.keys = keys;
    this.locale = locale;
    this.shifted = false;

    this.area.focus();
  }

  createKeyboard() {
    const template = `
      <section class="">
        <ul class="buttons-list list-reset"></ul>
      </section>
    `;

    const keyboard = createFromTemplate(template);
    const buttonsList = keyboard.querySelector('.buttons-list');

    this.keys.forEach((key) => {
      const buttonTemplate = `
        <button class="buttons-list__button" id="${key.code}">
          ${key.keyRu ? key.keyRu.trim() : key.key.trim()}
        </button>
      `;

      const button = createFromTemplate(buttonTemplate);
      if (!key.mode) {
        button.addEventListener('mousedown', (evt) => {
          this.handleKeyPress(evt);
          this.toggleActiveClass(button);
        });
        button.addEventListener('mouseup', () => {
          this.toggleActiveClass(button);
        });
      }

      button.addEventListener('mousedown', () => {
        this.toggleActiveClass(button);
      });
      button.addEventListener('mouseup', () => {
        this.toggleActiveClass(button);
      });

      buttonsList.append(button);
    });

    return keyboard;
  }

  renderKeyboard() {
    this.container.append(this.createKeyboard());
  }

  handleKeyPress(evt) {
    this.area.value += evt.target.textContent.trim();
  }

  toggleActiveClass(btn) {
    btn.classList.toggle('active');
  }
}

export default KeyBoard;
