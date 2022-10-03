const express = require("express");
const app = express();
const port = "3000";
const Users = require("./models/user.js");
const router = require("./routes/routers");
const Db = require("./config/database");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);
Db.sync()
  .then(() => {
    console.log("connected to db");
  })
  .catch(() => {
    (error) => console.log(error);
  });

/* Create a new user */
const admin = Users.create({
  name: "admin",
  email: "admin@gmail.com",
  role: 1,
});
console.log(admin.id);

app.listen(port, () => console.log("Server running at http://localhost:3000"));
