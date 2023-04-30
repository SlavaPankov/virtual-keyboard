import TextArea from './components/TextArea/TextArea';
// eslint-disable-next-line import/no-named-as-default
import KeyboardController from './components/KeyBoard/controller/KeyboardController';
import KeyboardModel from './components/KeyBoard/model/KeyboardModel';
import KeyboardView from './components/KeyBoard/view/KeyboardView';

// eslint-disable-next-line no-new
new TextArea(20, 100, 'Ваш комментарий...');
// eslint-disable-next-line no-new
new KeyboardController(new KeyboardModel(), new KeyboardView('.comment__area'));
