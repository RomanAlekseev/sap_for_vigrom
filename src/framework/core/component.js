export class Component {
  constructor(config) {
    this.element = null;
    //config destructorization
    Object.assign(this, config);
  }

  render() {
    this.element = document.querySelector(`.${this.entryClass}`);

    if (!this.element)
      throw new Error(
        `Tag with this class attribute: ${this.entryClass} wasn't found in index.html `
      );

    this.element.innerHTML = this.template;
  }
}
