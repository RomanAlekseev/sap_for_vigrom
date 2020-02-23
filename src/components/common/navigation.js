import { ViewFrameWorkComponent, history } from "framework";
import { router } from "framework";
import template from "../../templates/common/navigationTemplate";

class Navigation extends ViewFrameWorkComponent {
  constructor(config) {
    super(config);
  }
}

export const navigation = new Navigation({
  entry: ".nav-container",
  template: () => template(router.getUrl())
});
