const express = require("express");
const app = express();
const port = "3000";
const Users = require("./models/user.js");
const router = require("./routes/routers");
const Db = require("./config/database");

/* Connecting to the database. */
Db.sync()
  .then(() => {
    console.log("connected to db");
  })
  .catch(() => {
    (error) => console.log(error);
  });

/* Listening to the port 3000 and logging the message "Server running at http://localhost:3000" */
app.listen(port, () => console.log("Server running at http://localhost:3000"));
