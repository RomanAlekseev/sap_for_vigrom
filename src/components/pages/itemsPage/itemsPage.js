import { ViewFrameWorkComponent, history, http } from "framework";
import template from "templates/itemsPageTemplate";
import "./itemsPage.css";

const data = {
  items: {
    1: { name: "item1", quantity: "1", price: "20" }
  },
  total: 3
};

const listArr = itemsParse(data);

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
    list: listArr,
    history: [],
    total: null
  },
  template
});

function itemsParse(arr) {
  return Object.entries(arr.items).map(item => {
    return `<li>name: ${item[1].name},<br/> quantity: ${item[1].quantity},<br/> price: ${item[1].price} </li>`;
  });
}
