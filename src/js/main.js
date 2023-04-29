import TextArea from './components/TextArea/TextArea';
import Keyboard from './components/KeyBoard/KeyBoard';

// eslint-disable-next-line no-new
new TextArea(20, 100, 'Ваш комментарий...');

const keyboard = new Keyboard('body', '.comment__area');

keyboard.renderKeyboard();
