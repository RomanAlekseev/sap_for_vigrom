import { util } from "framework/tools/utils";

export class Component {
  constructor(config) {
    this.element = null;
    this.newPageTitle = config.title;
    this.template = config.template;
    this.props = config.props || {};
  }

  render() {
    this.element = document.querySelector(".root");
    if (this.newPageTitle) document.title = this.newPageTitle;

    if (!this.element)
      throw new Error(
        `Tag with this class attribute: .root wasn't found in index.html `
      );
    this.element.innerHTML = this.template.call(this, this.props);

    this.__initEvents();
  }

  __initEvents() {
    if (util.isUndefinded(this.events)) return;

    let events = this.events();

    Object.keys(events).forEach(key => {
      let listener = key.split(" ");

      this.element
        .querySelector(listener[1])
        .addEventListener(listener[0], this[events[key]].bind(this));
    });
  }
}
