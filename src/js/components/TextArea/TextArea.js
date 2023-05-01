import createFromTemplate from '../../functions/createFromTemplate';
import './style.scss';

class TextArea {
  constructor(rows = 30, cols = 30, placeholder = '', resize = false) {
    this.rows = rows;
    this.cols = cols;
    this.resize = resize;
    this.placeholder = placeholder;

    this.init();
  }

  init() {
    const template = `
      <section class="comment">
        <form class="comment__form" action="">
          <textarea class='comment__area ${this.resize ? '' : 'no-resize'}'
                    name="comment" 
                    id="comment" 
                    cols="${this.cols}" 
                    rows="${this.rows}" 
                    placeholder="${this.placeholder}"
          ></textarea>
        </form>
      </section>
    `;

    // eslint-disable-next-line no-undef
    document.body.append(createFromTemplate(template));
  }
}

export default TextArea;
