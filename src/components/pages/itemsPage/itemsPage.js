import { ViewFrameWorkComponent, history, http } from "framework";
import template from "templates/itemsPageTemplate";
import "./itemsPage.css";

class ItemsPage extends ViewFrameWorkComponent {
  constructor(config) {
    super(config);
  }

  didMount() {
    http.get("http://localhost:4020/items").then(res => {
      this.props.list = itemsParse(res);
      this.props.total = Object.entries(res)[1][1];
      this.render();
    });
  }

  events() {
    return {
      "click .goBackButton": "goBack"
    };
  }

  goBack() {
    history.goBack();
  }
}

export const itemsPage = new ItemsPage({
  title: "SPA - Items",
  props: {
    list: [],
    history: [],
    total: null
  },
  template
});

function itemsParse(arr) {
  return Object.entries(arr.items).map(item => {
    return `
    <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
     <h4 class="card-header">${item[1].name} <span class="text-danger">x</span> ${item[1].quantity}</h4>
     <div class="card-body">
       <h5 class="card-title text-muted">Description:</h5>
       <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
     </div>
     <div class="price ml-auto mr-3 pb-3">Price: <b>${item[1].price} EUR</b></div>
    </div>`;
  });
}
