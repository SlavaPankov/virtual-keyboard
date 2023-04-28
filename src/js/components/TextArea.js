import createFromTemplate from '../functions/createFromTemplate';

class TextArea {
  constructor(rows = 30, cols = 30, placeholder = '') {
    this.rows = rows;
    this.cols = cols;
    this.placeholder = placeholder;

    this.init();
  }

  init() {
    const template = `
      <section class="comment">
        <form class="comment__form" action="">
          <textarea class="comment__area" 
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
