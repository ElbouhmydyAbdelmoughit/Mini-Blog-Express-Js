const { Router } = require("express");
const router = Router();
const categories = require("../controllers/categories");

router.post("/add", categories.create);
module.exports = router;
