import { ViewFrameWorkComponent, history } from "framework";
import template from "templates/homePageTemplate";
import "./homePage.css";

class Home extends ViewFrameWorkComponent {
  constructor(config) {
    super(config);
  }
}

export const homePage = new Home({
  title: "SPA - Home",
  template
});
