import { ViewFrameWorkComponent } from "../framework";

class ItemsPage extends ViewFrameWorkComponent {
  constructor(config) {
    super(config);
  }
}

export const itemsPage = new ItemsPage({
  entryClass: "home",
  template: `<div>Items Component</div>
              <ul>
              <li><a href="#menu">Menu</a></li> 
              <li><a href="#about">About</a></li>  
              </ul>`
});
