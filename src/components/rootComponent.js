import { ViewFrameWork } from "../framework";
import { homeComponent } from "./home";

class Root extends ViewFrameWork {
  constructor(config) {
    super(config);
  }
}

export const rootComponent = new Root({
  components: [homeComponent]
});
