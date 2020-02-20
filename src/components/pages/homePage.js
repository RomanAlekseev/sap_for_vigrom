import { ViewFrameWorkComponent } from "framework";

class Home extends ViewFrameWorkComponent {
  constructor(config) {
    super(config);
  }
}

export const homeComponent = new Home({
  entryClass: "root",
  template: `<div>Home Component</div>
              <ul>
                <li><a href="#menu">Menu</a></li> 
                <li><a href="#items">Items</a></li> 
                <li><a href="#about">About</a></li> 
              </ul>`
});
