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

    if (this.model.capsed) {
      this.view.addActiveClass(this.view.keyboard.querySelector('#CapsLock'));
    }
  }

  // eslint-disable-next-line class-methods-use-this
  handleButtonClick(area, value) {
    area.value += value;
  }

  // eslint-disable-next-line class-methods-use-this
  handleCapsClick = () => {
    this.model.changeCapsed();

    this.initialButtonsState();
  }
}

export default KeyboardController;
