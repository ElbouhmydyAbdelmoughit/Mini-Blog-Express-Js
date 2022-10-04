const express = require("express");
const app = express();
const port = "3000";
const router = require("./routes/categories");
const Db = require("./config/database");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/categories", router);

/* Connecting to the database. */
Db.sync()
  .then(() => {
    console.log("Database Connected");
  })
  .catch(() => {
    (error) => console.log(" Database Not Connected " + error);
  });

/* Listening to the port 3000 and logging the message "Server running at http://localhost:3000" */
app.listen(3000, () => console.log("Server running at http://localhost:3000"));
