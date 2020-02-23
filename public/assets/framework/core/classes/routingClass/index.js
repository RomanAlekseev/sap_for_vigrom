import { util } from "framework/tools/utils";
import { router } from "./router";
import { renderComponent } from "../componentClass/helpers";
import History from "../historyClass";

export const history = new History();

export class Routing {
  constructor(routes) {
    this.routes = routes;
  }

  init() {
    window.addEventListener("hashchange", ({ newUrl, oldURL }) => {
      if (newUrl !== oldURL) history.setHistoryQueue();
      __renderRoute(this.routes);
    });
    __renderRoute(this.routes);
  }
}

function __renderRoute(routes) {
  routes = Object.entries(routes);

  let url = router.getUrl();
  let route = routes.find(r => r[0] === url);
  const [, common] = routes.find(r => r[0] === "common");

  if (util.isUndefinded(route)) {
    route = routes.find(r => r[0] === "notFound");
  }

  common.forEach(r => renderComponent(r));
  route[1]().then(component => renderComponent(component));
}
