import { util } from "framework/tools/utils";
import { router } from "./router";
import { renderComponent } from "../component/helpers";

export class Routing {
  constructor(routes) {
    this.routes = routes;
  }

  init() {
    window.addEventListener("hashchange", () => __renderRoute(this.routes));
    __renderRoute(this.routes);
  }
}

function __renderRoute(routes) {
  let url = router.getUrl();
  let route = routes.find(r => r.path === url);

  if (util.isUndefinded(route)) {
    route = routes.find(r => r.path === "**");
  }

  renderComponent(route.component);
}
