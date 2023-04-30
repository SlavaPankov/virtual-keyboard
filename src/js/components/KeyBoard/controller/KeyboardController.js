class KeyboardController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.initialState();

  }

  initialState() {
    this.view.displayKeyboard();
    this.initialButtonsState();

    document.addEventListener('keydown', (evt) => {
      if (evt.code !== 'CapsLock') {
        this.view.addActiveClass(this.view.getKeyBiId(evt.code));
      }

      if (evt.code === 'CapsLock') {
        this.view.addActiveClass(this.view.getKeyBiId(evt.code));
        this.handleCapsClick();
      }

      if (evt.code === 'AltLeft') {
        this.view.altClick = true;
      }

      if (evt.code === 'ShiftLeft') {
        this.handleShiftClick(evt.type);
      }

      if (evt.code === 'Tab') {
        evt.preventDefault();
        this.handleTabClick();
      }
    });

    document.addEventListener('keyup', (evt) => {
      if (evt.code !== 'CapsLock') {
        this.view.removeActiveClass(this.view.getKeyBiId(evt.code));
      }

      if (evt.code === 'ShiftLeft') {
        this.handleShiftClick(evt.type);
      }
    });
  }

  initialButtonsState() {
    this.view.displayButtons(this.model.data, this.model.dataValues);
    this.view.bindHandleButtonsClick(this.handleButtonClick);
    this.view.bindCapsClick(this.handleCapsClick);
    this.view.bindShiftClick(this.handleShiftClick);
    this.view.bindBackspaceClick(this.handleBackspaceClick);
    this.view.bindDeleteClick(this.handleDeleteClick);
    this.view.bindEnterClick(this.handleEnterClick);
    this.view.bindSpaceClick(this.handleSpaceClick);
    this.view.bindTabClick(this.handleTabClick);
    this.view.bindAltClick(this.handleAltClick);
    this.view.bindCtrlClick(this.handleCtrlClick);
    this.view.bindArrowClick(this.handleArrowClick);

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

  handleShiftClick = (eventType) => {
    if (this.view.altClick && (eventType === 'mousedown' || eventType === 'keydown')) {
      this.model.changeLanguage();
      this.model.changeShifted();
      this.initialButtonsState();
    } else {
      this.model.changeShifted();
      this.initialButtonsState();
    }

  }

  handleBackspaceClick = () => {
    const selectionStart = this.view.area.selectionStart;
    const selectionEnd = this.view.area.selectionEnd;
    const arrFromStr = this.view.area.value.split('');


    if (selectionStart === selectionEnd) {
      arrFromStr.splice(selectionStart - 1, 1);
      this.view.area.value = arrFromStr.join('');
      this.view.area.setSelectionRange(selectionStart - 1, selectionStart - 1);
    } else {
      arrFromStr.splice(selectionStart, selectionEnd - selectionStart);
      this.view.area.value = arrFromStr.join('');
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

  handleTabClick = () => {
    const selectionStart = this.view.area.selectionStart;
    const firstPartStr = this.view.area.value.slice(0, selectionStart);
    const secondPartStr = this.view.area.value.slice(selectionStart, this.view.area.value.length);

    this.view.area.value = firstPartStr + '  ' + secondPartStr;
    this.view.area.setSelectionRange(selectionStart + 2, selectionStart + 2);
  }

  handleAltClick = () => {
    this.view.altClick = true;
  }

  handleCtrlClick = () => {
    if (this.view.altClick) {
      this.model.changeLanguage();
      this.initialButtonsState();
      this.view.altClick = false;
    }
  }

  handleArrowClick = (target) => {
    const selectionStart = this.view.area.selectionStart;
    switch (target.id) {
      case 'ArrowLeft':
        this.view.area.setSelectionRange(selectionStart - 1, selectionStart - 1);
        break;
      case 'ArrowUp':
      case 'ArrowDown':
        const firstPartStr = this.view.area.value.slice(0, selectionStart);
        const secondPartStr = this.view.area.value.slice(selectionStart, this.view.area.value.length);

        this.view.area.value = firstPartStr + target.textContent.trim() + secondPartStr;
        this.view.area.setSelectionRange(selectionStart + 1, selectionStart + 1);
        break;
      case 'ArrowRight':
        this.view.area.setSelectionRange(selectionStart + 1, selectionStart + 1);
        break;
    }
  }
}

export default KeyboardController;
