import createFromTemplate from '../../functions/createFromTemplate';
import keys from '../../config';
import './style.scss';

class Keyboard {
  constructor(container, area, locale = 'ru-RU') {
    this.container = container;
    this.area = area;
    this.keys = keys;
    this.locale = locale;
    this.shifted = false;
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
        button.addEventListener('click', (evt) => {
          this.handleKeyPress(evt);
        });
      }

      buttonsList.append(button);
    });

    return keyboard;
  }

  renderKeyboard() {
    this.container.append(this.createKeyboard());
  }

  handleKeyPress(evt) {
    this.area.value += evt.target.textContent.trim();
    this.area.focus();
  }
}

export default Keyboard;
