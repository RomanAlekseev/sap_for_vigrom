import { ViewFrameWorkComponent, history } from "framework";
import template from "templates/homePageTemplate";

class Home extends ViewFrameWorkComponent {
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

export const homePage = new Home({
  title: "SPA - Home",
  template
});
