import { ViewFrameWorkComponent, history } from "framework";
import template from "templates/notFoundPageTemplate";

class NotFound extends ViewFrameWorkComponent {
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

export const notFoundPage = new NotFound({
  title: "SPA - Page Not Found",
  template
});
