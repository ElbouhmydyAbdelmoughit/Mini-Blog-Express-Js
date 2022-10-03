const express = require("express");
const router = express.Router();
const app = express();

app.get("/home", (req, res) => {
  res.send("Hello World");
});
module.exports = router;
