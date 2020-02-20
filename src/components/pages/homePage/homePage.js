import { ViewFrameWorkComponent } from "framework";
import template from "templates/homePageTemplate";

class Home extends ViewFrameWorkComponent {
  constructor(config) {
    super(config);
  }
}

export const homePage = new Home({
  title: "SPA - Home",
  template
});
