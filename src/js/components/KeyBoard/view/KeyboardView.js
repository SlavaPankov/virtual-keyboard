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
    this.keyboard.querySelector('.buttons-list').innerHTML = '';

    this.createButtons(array, arrayValues).forEach((button) => {
      this.keyboard.querySelector('.buttons-list').append(button);
    });
  }

  bindHandleButtonsClick(handler) {
    this.keyboard.querySelectorAll('.buttons-list__button').forEach((button) => {
      if (!button.dataset.mode) {
        button.addEventListener('mousedown', (evt) => {
          handler(this.area, evt.target.textContent.trim());
          evt.target.classList.add('active');
        });

        button.addEventListener('mouseup', (evt) => {
          evt.target.classList.remove('active');
        });
      }
    });
  }

  bindCapsClick(handler) {
    this.keyboard.querySelector('#CapsLock').addEventListener('click', () => {
      handler();
    });
  }

  addActiveClass(el) {
    el.classList.add('active');
  }

  removeActiveClass(el) {
    el.classList.remove('active');
  }
}

export default KeyboardView;
