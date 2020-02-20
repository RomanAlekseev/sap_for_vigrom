const express = require("express");
const app = express();

const items = require("./data");

app.get("/items", (req, res) => {
  res.send(items);
});

app.listen(3000);
