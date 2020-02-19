import { util } from "framework/tools/utils";
import { router } from "./router";
import { renderComponent } from "../component/helpers";

export class Routing {
  constructor(routes) {
    this.routes = routes;
  }

  setHistoryQueue() {
    if (__historyQueue.length > 9) {
      __historyQueue.shift();
    }

    __historyQueue.push(location.href);
    sessionStorage.setItem("history", JSON.stringify(__historyQueue));
  }

  getHistoryQueue() {
    return __historyQueue;
  }

  historyBack() {
    window.history.back();
  }

  historyForward() {
    window.history.forward();
  }

  init() {
    window.addEventListener("hashchange", () => {
      withHistory.call(this, this.routes);
    });
    withHistory.call(this, this.routes);
  }
}

function __renderRoute(routes) {
  routes = Object.entries(routes);

  let url = router.getUrl();
  let route = routes.find(r => r[0] === url);

  if (util.isUndefinded(route)) {
    route = routes.find(r => r[0] === "notFound");
  }

  renderComponent(route[1]);
}

const __historyQueue = JSON.parse(sessionStorage.getItem("history")) || [];

function withHistory(args) {
  this.setHistoryQueue();
  __renderRoute.apply(null, [args]);
}
