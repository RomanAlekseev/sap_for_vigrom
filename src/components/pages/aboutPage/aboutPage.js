import { ViewFrameWorkComponent, history } from "framework";
import template from "templates/aboutPageTemplate";
import "./aboutPage.css";

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
}

export const aboutPage = new AboutPage({
  title: "SPA - About",
  template
});
