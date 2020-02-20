import { ViewFrameWorkComponent } from "framework";
import template from "templates/notFoundPageTemplate";

class NotFound extends ViewFrameWorkComponent {
  constructor(config) {
    super(config);
  }
}

export const notFoundPage = new NotFound({
  title: "SPA - Page Not Found",
  template
});
