import { ViewFrameWork } from "framework";
import { homeComponent } from "./pages/homePage";
import { header } from "./common/header";
import { footer } from "./common/footer";
import { appRoutes as routes } from "../routes";

class Root extends ViewFrameWork {
  constructor(config) {
    super(config);
  }
}

export const rootComponent = new Root({
  components: [homeComponent, header, footer],
  routes
});
