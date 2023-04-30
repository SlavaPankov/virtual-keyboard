import createFromTemplate from '../../../functions/createFromTemplate';
import './style.scss';

class KeyboardView {
  constructor() {
    this.container = document.body;
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
  }

  displayButtons(array, arrayValues) {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < array.length; i++) {
      const template = `
        <button class="buttons-list__button" id="${array[i].code}">
          ${arrayValues[i]}
        </button>
      `;

      this.keyboard.querySelector('.buttons-list').append(createFromTemplate(template));
    }
  }
}

export default KeyboardView;
