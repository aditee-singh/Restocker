const Category = require("../../model/Category");
const express = require("express");
const router = express.Router();
router.post("/", async (req, res) => {
  try {
    const category = new Category({
      category: req.body.category,
    });
    const cat = await category.save();
    return res.json(cat);
  } catch (error) {
    console.log(error.message);
    return res.json({ error });
  }
});
module.exports = router;
