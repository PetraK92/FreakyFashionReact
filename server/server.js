const express = require("express");
const Database = require("better-sqlite3");
const cors = require("cors");

const port = 8000;

const db = new Database("./db/products.db", {
  //Vi vill se sql-kommandon som körs i konsolen
  verbose: console.log,
});

const app = express();

//För att datan ska kunna hämtas upp från servern
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

app.get("/api/products", (req, res) => {
  //Förbered den valda produkten
  const select = db.prepare(
    "SELECT id, name, price, brand, image, slug, addedDate, description, sku FROM products"
  );

  //Hämta alla rader
  const products = select.all();

  res.json(products);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

app.get("/api/product/:slug", (req, res) => {
  const { slug } = req.params;
  const select = db.prepare(
    "SELECT id, name, price, brand, image, slug, addedDate, description, sku FROM products WHERE slug = ?"
  );

  const product = select.get(slug);

  if (product) {
    const selectSimilarProducts = db.prepare(
      "SELECT id, name, price, brand, image, slug FROM products WHERE slug != ? ORDER BY RANDOM() LIMIT 3"
    );

    const similarProducts = selectSimilarProducts.all(slug);

    res.json({ ...product, similarProducts });
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});
