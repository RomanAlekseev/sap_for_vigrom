import { router } from "./routing/router";
import { util } from "../tools/utils";
import { renderComponent } from "./component/helpers";
import { Routing } from "../core/routing";

export class Root {
  constructor(config) {
    this.routes = config.routes;
    this.components = config.components;
  }

  start() {
    __initComponents(this.components);
    if (this.routes) __initRouting(this.routes);
  }
}

function __initComponents(components) {
  components.forEach(renderComponent);
}

function __initRouting(routes) {
  if (util.isUndefinded(routes)) return;

  let routing = new Routing(routes);
  routing.init();
}
