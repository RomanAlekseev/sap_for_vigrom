import { util } from "../../tools/utils";
import { renderComponent } from "./componentClass/helpers";
import { Routing } from "./routingClass";

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
