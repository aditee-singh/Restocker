const Trade = require("../../model/Trade");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { trade } = req.body;
    const trad = new Trade({ trade });
    await trad.save();
    return res.json(trad);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send("Server Error");
  }
});
module.exports = router;
