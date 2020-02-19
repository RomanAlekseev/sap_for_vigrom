import { router } from "../tools/router";
import { util } from "../tools/utils";

export class Root {
  constructor(config) {
    // this.components = config.components;
    Object.assign(this, config);
  }

  start() {
    this.initComponents();
    if (this.routes) this.initRoutes();
  }

  initComponents() {
    this.components.forEach(this.renderComponent.bind(this));
  }

  initRoutes() {
    window.addEventListener("hashchange", this.renderRoute.bind(this));
    this.renderRoute();
  }

  renderRoute() {
    let url = router.getUrl();
    let route = this.routes.find(r => r.path === url);

    if (util.isUndefinded(route)) {
      route = this.routes.find(r => r.path === "**");
    }

    this.renderComponent(route.component);
  }

  renderComponent(component) {
    component.render();
  }
}
