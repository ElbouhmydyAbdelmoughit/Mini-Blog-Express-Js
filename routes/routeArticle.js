let express = require("express");
const {
  findPost,
  addPost,
  findSinglePost,
  updatePost,
  deletePost,
} = require("../controlleurs/ArticleControlleur");
let Router = express.Router();

Router.post("/addArticle", addPost);

Router.get("/findA", findPost);

Router.get("/findOneA/:id", findSinglePost);

Router.put("/UpdateA/:id", updatePost);

Router.delete("/deleteA/:id", deletePost);

module.exports = Router;
