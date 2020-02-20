import { ViewFrameWork } from "framework";
import homeComponent from "./pages/homePage/";
import { appRoutes as routes } from "../routes";

class Root extends ViewFrameWork {
  constructor(config) {
    super(config);
  }
}

export const rootComponent = new Root({
  components: [homeComponent],
  routes
});
