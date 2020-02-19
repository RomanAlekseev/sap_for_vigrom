import { ViewFrameWorkComponent } from "../framework";

class NotFound extends ViewFrameWorkComponent {
  constructor(config) {
    super(config);
  }
}

export const notFound = new NotFound({
  entryClass: "home",
  template: `<div>This page is not found</div>`
});
