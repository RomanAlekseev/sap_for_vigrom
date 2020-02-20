import { ViewFrameWorkComponent, history } from "framework";
import template from "templates/itemsPageTemplate";

class ItemsPage extends ViewFrameWorkComponent {
  constructor(config) {
    super(config);
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

const data = {
  items: {
    1: { name: "item1", quantity: "1", price: "20" },
    2: { name: "item2", quantity: "5", price: "5" },
    3: { name: "item3", quantity: "3", price: "30" }
  },
  total: 3
};

const listArr = Object.entries(data.items).map(item => {
  return `<li>name: ${item[1].name},<br/> quantity: ${item[1].quantity},<br/> price: ${item[1].price} </li>`;
});

export const itemsPage = new ItemsPage({
  title: "SPA - Items",
  template: template(listArr)
});
