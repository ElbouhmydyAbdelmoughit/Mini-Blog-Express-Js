const categories = require("../models/Categories");

const create = (req, res) => {
  const { body } = req;
  categories
    .create({ ...body })
    .then(() => {
      res.json({ msg: "created" });
    })
    .catch(() => {
      res.json({ msg: "not created" });
    });
};

module.exports = { create };
