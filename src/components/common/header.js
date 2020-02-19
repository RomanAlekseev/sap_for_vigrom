import { ViewFrameWorkComponent } from "framework";

class Header extends ViewFrameWorkComponent {
  constructor(config) {
    super(config);
  }
}

export const header = new Header({
  entryClass: "header",
  template: `<div>Header</div>`
});
