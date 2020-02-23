import { ViewFrameWorkComponent, history } from "framework";
import template from "../../templates/common/goBackButtonTemplate";

class ButtonComponent extends ViewFrameWorkComponent {
  constructor(config) {
    super(config);
  }

  events() {
    return {
      "click .goBack": "goBack"
    };
  }

  goBack() {
    history.goBack();
  }
}

export const goBackButton = new ButtonComponent({
  entry: ".goBackButton",
  template
});
