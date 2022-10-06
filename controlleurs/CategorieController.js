const Categorie = require("../models/categories");

const AddCategorie = (req, res) => {
  res.send("Add Categorie");
};

const findAllCategorie = (req, res) => {
  res.send("List Categorie");
};

const UpdateCategorie = (req, res) => {
  res.send("Update Categorie");
};

const DeleteCategorie = (req, res) => {
  res.send("datele Categprie");
};

module.exports = {
  AddCategorie,
  findAllCategorie,
  UpdateCategorie,
  DeleteCategorie,
};
