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
}

export default KeyboardModel;
