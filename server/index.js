const express = require("express");
var cors = require("cors");

const app = express();

const items = require("./data");
const port = 4020;

app.use("*", cors());

app.get("/items", (req, res) => {
  res.send(items);
});

app.listen(port, () => console.log("Server is up on port " + port));
