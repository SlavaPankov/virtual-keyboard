import createFromTemplate from '../../../functions/createFromTemplate';
import './style.scss';

class KeyboardView {
  constructor(area) {
    this.container = document.body;
    this.area = document.querySelector(`${area}`);
    this.keyboard = this.createKeyboard();
    this.area.focus();
  }

  // eslint-disable-next-line class-methods-use-this
  createKeyboard() {
    const template = `
      <section class="">
        <ul class="buttons-list list-reset"></ul>
      </section>
    `;

    return createFromTemplate(template);
  }

  displayKeyboard() {
    this.container.append(this.keyboard);
  }

  // eslint-disable-next-line class-methods-use-this
  createButtons(array, arrayValues) {
    const buttons = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < array.length; i++) {
      const template = `
        <button class="buttons-list__button" id="${array[i].code}" data-mode="${array[i].mode ? array[i].mode : ''}">
          ${arrayValues[i]}
        </button>
      `;

      buttons.push(createFromTemplate(template));
    }

    return buttons;
  }

  displayButtons(array, arrayValues) {
    this.createButtons(array, arrayValues).forEach((button) => {
      this.keyboard.querySelector('.buttons-list').append(button);
    });
  }

  bindHandleButtonsClick(handler) {
    this.keyboard.querySelectorAll('.buttons-list__button').forEach((button) => {
      if (!button.dataset.mode) {
        button.addEventListener('click', (evt) => {
          handler(this.area, evt.target.textContent.trim());
        });
      }
    });
  }
}

export default KeyboardView;
