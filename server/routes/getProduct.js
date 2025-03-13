const express = require("express");
const router = express.Router();

router.get("/:slug", (req, res) => {
  console.log("getProduct route hit!");
  console.log("Received slug:", req.params.slug);

  res.send("Check your console for logs!");
});

module.exports = router;
