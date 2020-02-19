export class Component {
  constructor(config) {
    this.element = null;
    this.entryClass = config.entryClass;
    this.template = config.template;
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
