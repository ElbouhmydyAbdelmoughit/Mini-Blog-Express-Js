let express = require("express");
let app = express();
let db = require("./config/db");
let Sequelize = require("sequelize");
let Categories = require("./models/categories");
let user = require("./models/users");
const Avis = require("./models/avis");
const Comment = require("./models/comment");
const Article = require("./models/articles");
const User = require("./models/users");
let bodyParser = require("body-parser");

const ArticleRouter = require("./routes/routeArticle");
const CmntRouter = require("./routes/routeCmnt");
const CategorieRouter = require("./routes/routerCategorie");

app.get("/", (req, res) => {
  res.send("ca marche ");
});

Categories.hasMany(Article);
Article.belongsTo(Categories);
Article.hasMany(Comment);
Comment.belongsTo(Article);
Article.hasMany(Avis);
Avis.belongsTo(Article);
User.hasMany(Comment);
Comment.belongsTo(User);
User.hasMany(Avis);
Avis.belongsTo(User);

/* Synchronizing the database. */
db.sync()
  .then(() => console.log("ca marche "))
  .catch((error) => {
    console.log(error);
  });

/* Telling the app to use the bodyParser.urlencoded() middleware. */
app.use(bodyParser.urlencoded({ extended: false }));

/* Telling the app to use the bodyParser.json() middleware. */
app.use(bodyParser.json());
/* Telling the app to use the ArticleRouter for any requests that start with /article. */
app.use("/article", ArticleRouter);
/* Telling the app to use the CmntRouter for any requests that start with /cmnt. */
app.use("/cmnt", CmntRouter);

/* Telling the app to use the CategorieRouter for any requests that start with /Categorie. */
app.use("/Categorie", CategorieRouter);
app.listen(3000);
