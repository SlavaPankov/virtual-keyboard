import keys from '../../../config';

class KeyboardModel {
  constructor() {
    this.data = keys;
    this.engKeys = ['key', 'shiftKeyEN'];
    this.ruKeys = ['keyRu', 'shiftKeyRu'];
    this.shifted = false;
    this.capsed = false;
    this.language = localStorage.getItem('language') || false;
    this.dataValues = this.language ? this.getValueByKey('keyRu') : this.getValueByKey('key');
  }

  saveLanguageToLS() {
    localStorage.setItem('language', this.language);
  }

  getValueByKey(key) {
    return this.data.map((item) => (item.mode ? item.mode === 'additional' && item.key : item[key]));
  }

  updateDataValues() {
    const currentKeys = this.language ? this.ruKeys : this.engKeys;

    if (this.capsed) {
      // eslint-disable-next-line max-len
      this.dataValues = this.dataValues.map((item) => (item.length === 1 ? item.toUpperCase() : item));
    } else {
      // eslint-disable-next-line max-len
      this.dataValues = this.dataValues.map((item) => (item.length === 1 ? item.toLowerCase() : item));
    }
  }

  changeCapsed() {
    this.capsed = !this.capsed;
    this.updateDataValues();
  }
}

export default KeyboardModel;
