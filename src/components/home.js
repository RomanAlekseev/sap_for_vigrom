import { ViewFrameWorkComponent } from "../framework";

class Home extends ViewFrameWorkComponent {
  constructor(config) {
    super(config);
  }
}

export const homeComponent = new Home({
  entryClass: "home",
  template: `<div>Home Component</div>`
});
