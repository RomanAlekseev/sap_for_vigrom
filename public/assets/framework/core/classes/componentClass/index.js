import { util } from "framework/tools/utils";
import { history } from "framework";

export class Component {
  constructor(config) {
    this.newPageTitle = config.title;
    this.template = config.template;
    this.props = config.props || {};
    this.appContainer = document.querySelector(".root");
    this.currentHashContainer = document.querySelector(".current_hash");
    this.historyContainer = document.querySelector(".history_display");
  }

  render() {
    if (this.newPageTitle) document.title = this.newPageTitle;

    if (!this.appContainer)
      throw new Error(
        `Tag with this class attribute: .root wasn't found in index.html `
      );
    this.appContainer.innerHTML = this.template.call(this, this.props);

    //update current-hash
    this.currentHashContainer.innerHTML = `<div class="text-danger position-absolute">${location.hash.replace(
      "#",
      "# "
    )}</div>`;
    //update history-block
    if (history.getHistoryQueue().length) {
      this.historyContainer.innerHTML =
        "Your History: <hr/>" +
        history
          .getHistoryQueue()
          .map(str => {
            return `<li><a href=${str}>${str}</a></li>`;
          })
          .join(",")
          .replace(/\,/g, " ");
    }

    this.__initEvents();
  }

  __initEvents() {
    if (util.isUndefinded(this.events)) return;

    let events = this.events();

    Object.keys(events).forEach(key => {
      let listener = key.split(" ");

      this.appContainer
        .querySelector(listener[1])
        .addEventListener(listener[0], this[events[key]].bind(this));
    });
  }
}
