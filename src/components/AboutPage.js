import { ViewFrameWorkComponent } from "framework";

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
              </ul>
              <hr/>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
                ducimus aliquam, molestiae quaerat ad facere blanditiis hic error at
                exercitationem animi sed nihil odio! Perferendis dicta, voluptatum vitae,
                veniam omnis veritatis accusantium quasi nostrum sit aliquid
                necessitatibus officia inventore porro labore odio quia alias expedita
                quibusdam nam, cupiditate temporibus quo.
             </p>
              `
});
