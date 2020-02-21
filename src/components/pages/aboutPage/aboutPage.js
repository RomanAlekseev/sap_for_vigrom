import { ViewFrameWorkComponent, history } from "framework";
import template from "templates/aboutPageTemplate";

class AboutPage extends ViewFrameWorkComponent {
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

  goForward() {
    history.goForward();
  }
}

export const aboutPage = new AboutPage({
  title: "SPA - About",
  template
});
