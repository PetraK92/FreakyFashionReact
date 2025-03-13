var express = require("express");
var router = express.Router();

const db = require("../db/db");

/* GET product page. */
router.get("/:slug", function (req, res, next) {
  console.log("HAllllå");
  const slug = req.params.slug;

  const select = db.prepare(`
  SELECT 
          id,
          name,
          price,
          brand,
          image,
          addedDate,
          slug,
          description
      FROM products
  `);

  try {
    const rows = select.all();
    const product = rows.find((row) => row.slug === slug);
    if (!product) {
      return res.status(404).send({ message: "Product not found" });
    }

    const similarProducts = getSimilarProducts(rows, product.id);

    res.render("details", {
      title: product.name,
      product,
      similarProducts,
    });
  } catch (error) {
    console.error("Error fetching products:", error.message);

    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
