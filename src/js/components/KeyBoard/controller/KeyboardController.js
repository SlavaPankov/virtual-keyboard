class KeyboardController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.initialState();

  }

  initialState() {
    this.view.displayKeyboard();
    this.initialButtonsState();
  }

  initialButtonsState() {
    this.view.displayButtons(this.model.data, this.model.dataValues);
    this.view.bindHandleButtonsClick(this.handleButtonClick);
    this.view.bindCapsClick(this.handleCapsClick);
    this.view.bindShiftLink(this.handleShiftClick);
    this.view.bindBackspaceClick(this.handleBackspaceClick);

    if (this.model.capsed) {
      this.view.addActiveClass(this.view.keyboard.querySelector('#CapsLock'));
    }
  }

  // eslint-disable-next-line class-methods-use-this
  handleButtonClick = (value) => {
    this.view.area.focus();
    this.view.area.value += value;

  }

  // eslint-disable-next-line class-methods-use-this
  handleCapsClick = () => {
    this.model.changeCapsed();

    this.initialButtonsState();
  }

  handleShiftClick = () => {
    this.model.changeShifted();

    this.initialButtonsState();
  }

  handleBackspaceClick = () => {
    const selectionStart = this.view.area.selectionStart;
    const selectionEnd = this.view.area.selectionEnd;
    const arrFromStr = this.view.area.value.split('');

    arrFromStr.splice(selectionStart - 1, selectionEnd - selectionStart === 0 ? 1 : selectionEnd - selectionStart);
    this.view.area.value = arrFromStr.join('');
    if (selectionStart === selectionEnd) {
      this.view.area.setSelectionRange(selectionStart - 1, selectionStart - 1);
    } else {
      this.view.area.setSelectionRange(selectionStart, selectionStart);
    }
  }
}

export default KeyboardController;
