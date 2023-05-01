import createFromTemplate from '../../../functions/createFromTemplate';
import './style.scss';

class KeyboardView {
  constructor(area) {
    this.container = document.body;
    this.area = document.querySelector(`${area}`);
    this.keyboard = this.createKeyboard();
    this.altClick = false;
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

  // eslint-disable-next-line class-methods-use-this
  createNotification() {
    const template = `
      <div class="notification">
        <p class="notification__paragraph">Клавиатура создана на основе системы Windows 11</p>
        <p class="notification__paragraph">Для смены языка используется сочетание левых Alt+Shift или Alt+Ctrl</p>
      </div>
    `;

    return createFromTemplate(template);
  }

  displayNotification() {
    this.container.append(this.createNotification());
  }

  bindHandleButtonsClick(handler) {
    this.keyboard.querySelectorAll('.buttons-list__button').forEach((button) => {
      if (!button.dataset.mode) {
        button.addEventListener('mousedown', (evt) => {
          handler(evt.target.textContent.trim());
        });

        button.addEventListener('mouseup', () => {
          this.area.focus();
        });
      }

      button.addEventListener('mousedown', (evt) => {
        this.addActiveClass(evt.target);
      });

      button.addEventListener('mouseup', (evt) => {
        this.removeActiveClass(evt.target);
      });
    });
  }

  bindCapsClick(handler) {
    this.getKeyBiId('CapsLock').addEventListener('click', () => {
      this.area.focus();
      handler();
    });
  }

  bindShiftClick(handler) {
    const shiftButtons = [this.getKeyBiId('ShiftLeft'), this.getKeyBiId('ShiftRight')];

    shiftButtons.forEach((button) => {
      button.addEventListener('mousedown', (evt) => {
        handler(evt.type);
      });

      button.addEventListener('mouseup', () => {
        this.area.focus();
        handler();
      });
    });
  }

  bindBackspaceClick(handler) {
    this.getKeyBiId('Backspace').addEventListener('click', () => {
      this.area.focus();
      handler();
    });
  }

  bindDeleteClick(handler) {
    this.getKeyBiId('Delete').addEventListener('click', () => {
      this.area.focus();
      handler();
    });
  }

  bindEnterClick(handler) {
    this.getKeyBiId('Enter').addEventListener('click', () => {
      this.area.focus();
      handler();
    });
  }

  bindSpaceClick(handler) {
    this.getKeyBiId('Space').addEventListener('click', () => {
      this.area.focus();
      handler();
    });
  }

  bindTabClick(handler) {
    this.getKeyBiId('Tab').addEventListener('click', () => {
      this.area.focus();
      handler();
    });
  }

  bindAltClick(handler) {
    this.getKeyBiId('AltLeft').addEventListener('click', () => {
      handler();
    });
  }

  bindCtrlClick(handler) {
    this.getKeyBiId('ControlLeft').addEventListener('click', () => {
      handler();
    });
  }

  bindArrowClick(handler) {
    const arrows = [
      this.getKeyBiId('ArrowLeft'),
      this.getKeyBiId('ArrowUp'),
      this.getKeyBiId('ArrowRight'),
      this.getKeyBiId('ArrowDown'),
    ];

    arrows.forEach((arrow) => {
      arrow.addEventListener('click', (evt) => {
        this.area.focus();
        handler(evt.target);
      });
    });
  }

  getKeyBiId(id) {
    return this.keyboard.querySelector(`#${id}`);
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
