class KeyboardController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.initialState();
    this.view.bindHandleButtonsClick(this.handleButtonClick);
  }

  initialState() {
    this.view.displayKeyboard();
    this.view.displayButtons(this.model.data, this.model.dataValues);
  }

  // eslint-disable-next-line class-methods-use-this
  handleButtonClick(area, value) {
    area.value += value;
  }
}

export default KeyboardController;
