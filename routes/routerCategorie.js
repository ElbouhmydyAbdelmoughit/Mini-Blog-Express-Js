const express = require("express");
const {
  AddCategorie,
  findAllCategorie,
  UpdateCategorie,
  DeleteCategorie,
} = require("../controlleurs/CategorieController");
const Router = express.Router();

Router.post("/AddCategorie", AddCategorie);
Router.post("/AllCategorie", findAllCategorie);
Router.post("/EditCategorie", UpdateCategorie);
Router.post("/DeleteCategorie", DeleteCategorie);

module.exports = Router;
