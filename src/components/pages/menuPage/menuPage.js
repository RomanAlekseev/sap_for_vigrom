import { ViewFrameWorkComponent, history } from "framework";
import template from "templates/menuTemplate";

class Menu extends ViewFrameWorkComponent {
  constructor(config) {
    super(config);
  }

  events() {
    return {
      "click .goBackButton": "goBack"
    };
  }

  goBack() {
    history.goBack();
  }
}

export const menuPage = new Menu({
  title: "SPA - Menu",
  template
});
