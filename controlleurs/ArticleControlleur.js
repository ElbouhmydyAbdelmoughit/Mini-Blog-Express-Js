const { json } = require("body-parser");
const Article = require("../models/articles");

const addPost = (req, res) => {
  try {
    Article.create(req.body);
    res.status(200).json({ message: "dakchi nadi a satt" });
  } catch (error) {
    console.log(error.message);
  }
};

const findPost = async (req, res) => {
  Article.findAll()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log("This Controller Not Working " + err);
    });
};

const findSinglePost = async (req, res) => {
  const articles = await Article.findOne({
    where: { id: req.params.id },
  });

  res.json(articles);
};

const updatePost = async (req, res) => {
  const article = await Article.update(
    {
      title: "Healty",
    },
    {
      where: { id: req.params.id },
    }
  );
};
const deletePost = async (req, res) => {
  const articles = await Article.destroy({
    where: { id: req.params.id },
  });

  res.json(articles);
};
module.exports = {
  addPost,
  findPost,
  findSinglePost,
  updatePost,
  deletePost,
};
