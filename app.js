const express = require("express");
const app = express();
const port = "3000";
const sequelize = require("./database");
const database = require("./database");
import User from "./models/user";

/* Router for pages */
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
