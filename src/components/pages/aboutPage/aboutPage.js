import { ViewFrameWorkComponent } from "framework";
import template from "templates/aboutPageTemplate";

class AboutPage extends ViewFrameWorkComponent {
  constructor(config) {
    super(config);
  }
}

export const aboutPage = new AboutPage({
  title: "SPA - About",
  template
});
