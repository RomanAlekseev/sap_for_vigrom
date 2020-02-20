export class Component {
  constructor(config) {
    this.element = null;
    this.newPageTitle = config.title;
    this.template = config.template;
  }

  render() {
    this.element = document.querySelector(".root");
    if (this.newPageTitle) document.title = this.newPageTitle;

    if (!this.element)
      throw new Error(
        `Tag with this class attribute: .root wasn't found in index.html `
      );

    this.element.innerHTML = this.template;
  }
}
