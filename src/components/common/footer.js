import { ViewFrameWorkComponent } from "framework";

class Footetr extends ViewFrameWorkComponent {
  constructor(config) {
    super(config);
  }
}

export const footer = new Footetr({
  entryClass: "footer",
  template: `<div>Footer</div>`
});
