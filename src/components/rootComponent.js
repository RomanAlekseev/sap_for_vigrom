import { ViewFrameWork } from "../framework";
import { homeComponent } from "./home";
import { header } from "./common/header";
import { appRoutes as routes } from "../routes";

class Root extends ViewFrameWork {
  constructor(config) {
    super(config);
  }
}

export const rootComponent = new Root({
  components: [homeComponent, header],
  routes
});
