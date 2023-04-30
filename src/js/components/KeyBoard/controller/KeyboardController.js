class KeyboardController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.view.displayKeyboard();
    this.initialState();
  }

  initialState() {
    return this.view.displayButtons(this.model.data, this.model.dataValues);
  }
}

export default KeyboardController;
