const express = require("express");
const app = express();

const items = {
  items: {
    1: { name: "item1", quantity: "1", price: "20" },
    2: { name: "item2", quantity: "5", price: "5" },
    3: { name: "item3", quantity: "3", price: "30" }
  },
  total: 3
};

app.get("/items", (req, res) => {
  res.send(items);
});

app.listen(3000);
