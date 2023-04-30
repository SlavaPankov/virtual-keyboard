import createFromTemplate from '../../../functions/createFromTemplate';
import './style.scss';

class KeyboardView {
  constructor(area) {
    this.container = document.body;
    this.area = document.querySelector(`${area}`);
    this.keyboard = this.createKeyboard();
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
    this.area.focus();
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
          handler(evt.target.textContent.trim());
          this.addActiveClass(evt.target);
        });

        button.addEventListener('mouseup', (evt) => {
          this.area.focus();
          this.removeActiveClass(evt.target);
        });
      }
    });
  }

  bindCapsClick(handler) {
    this.keyboard.querySelector('#CapsLock').addEventListener('click', () => {
      this.area.focus();
      handler();
    });
  }

  bindShiftLink(handler) {
    const shiftButtons = [this.keyboard.querySelector('#ShiftLeft'), this.keyboard.querySelector('#ShiftRight')];

    shiftButtons.forEach((button) => {
      button.addEventListener('mousedown', () => {
        handler();
      });

      button.addEventListener('mouseup', () => {
        this.area.focus();
        handler();
      });
    });
  }

  bindBackspaceClick(handler) {
    this.keyboard.querySelector('#Backspace').addEventListener('click', () => {
      this.area.focus();
      handler();
    });
  }

  bindDeleteClick(handler) {
    this.keyboard.querySelector('#Delete').addEventListener('click', () => {
      this.area.focus();
      handler();
    });
  }

  // eslint-disable-next-line class-methods-use-this
  addActiveClass(el) {
    el.classList.add('active');
  }

  // eslint-disable-next-line class-methods-use-this
  removeActiveClass(el) {
    el.classList.remove('active');
  }
}

export default KeyboardView;
