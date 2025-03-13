var express = require("express");
var router = express.Router();

const db = require("../db/db");
console.log("laddad");
/* GET product page. */
router.get("/:slug", function (req, res, next) {
  console.log("HALLLLLÅ");
  const slug = req.params.slug;
  console.log("slug", slug);
  const select = db.prepare(
    `SELECT 
        id,
        name,
        price,
        brand,
        image,
        addedDate,
        slug,
        description
     FROM products
     `
  );

  try {
    const rows = select.all();
    const product = rows.find((row) => row.slug === slug);
    if (!product) {
      return res.status(404).send({ message: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    console.error("Error fetching products:", error.message);

    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
