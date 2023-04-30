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
    this.view.bindDeleteClick(this.handleDeleteClick);
    this.view.bindEnterClick(this.handleEnterClick);
    this.view.bindSpaceClick(this.handleSpaceClick);

    if (this.model.capsed) {
      this.view.addActiveClass(this.view.keyboard.querySelector('#CapsLock'));
    }
  }

  // eslint-disable-next-line class-methods-use-this
  handleButtonClick = (value) => {
    this.view.area.value += value;
  }

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

  handleDeleteClick = () => {
    const selectionStart = this.view.area.selectionStart;
    const selectionEnd = this.view.area.selectionEnd;
    const arrFromStr = this.view.area.value.split('');

    arrFromStr.splice(selectionStart, selectionEnd - selectionStart === 0 ? 1 : selectionEnd - selectionStart);
    this.view.area.value = arrFromStr.join('');
    if (selectionStart === selectionEnd) {
      this.view.area.setSelectionRange(selectionStart, selectionStart);
    } else {
      this.view.area.setSelectionRange(selectionStart, selectionStart);
    }
  }

  handleSpaceClick = () => {
    const selectionStart = this.view.area.selectionStart;
    const firstPartStr = this.view.area.value.slice(0, selectionStart);
    const secondPartStr = this.view.area.value.slice(selectionStart, this.view.area.value.length);

    this.view.area.value = firstPartStr + ' ' + secondPartStr;
    this.view.area.setSelectionRange(selectionStart + 1, selectionStart + 1);
  }

  handleEnterClick = () => {
    this.view.area.value += '\n';
  }
}

export default KeyboardController;
