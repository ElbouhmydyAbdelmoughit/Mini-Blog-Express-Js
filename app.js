/* Importing the express module. */
const express = require("express");

/* Creating an instance of the express module. */
const app = express();

/* Setting the port to 3000. */
const port = "3000";

/* Importing the database.js file. */
const database = require("./database");

/* Router for pages */
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
