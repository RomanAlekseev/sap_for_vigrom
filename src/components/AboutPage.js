import { ViewFrameWorkComponent } from "../framework";

class AboutPage extends ViewFrameWorkComponent {
  constructor(config) {
    super(config);
  }
}

export const aboutPage = new AboutPage({
  entryClass: "home",
  template: `<div>About Component</div>
              <ul>
                <li><a href="#menu">Menu</a></li> 
                <li><a href="#items">Items</a></li> 
              </ul>`
});
