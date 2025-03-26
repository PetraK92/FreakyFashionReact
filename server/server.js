const express = require("express");
const Database = require("better-sqlite3");
const cors = require("cors");
const slugify = require("slugify");

const port = 8000;

const db = new Database("./db/products.db", {
  verbose: console.log, // Logga SQL-kommandon i konsolen
});

const app = express();

// För att tillåta cross-origin-förfrågningar från localhost:3000 (React)
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

app.get("/api/products", (req, res) => {
  const select = db.prepare(
    "SELECT id, name, price, brand, image, slug, addedDate, description, sku FROM products"
  );

  const products = select.all();

  res.json(products);
});

app.use(express.json()); // Gör så att servern kan tolka JSON i request-body

// Funktion för att generera en unik slug
const generateUniqueSlug = (name) => {
  let slug = slugify(name, { lower: true, strict: true });
  let existingSlug = db
    .prepare("SELECT COUNT(*) AS count FROM products WHERE slug = ?")
    .get(slug).count;

  // Kontrollera om sluggen redan finns i databasen
  let counter = 1;
  while (existingSlug > 0) {
    slug = `${slug}-${counter}`;
    existingSlug = db
      .prepare("SELECT COUNT(*) AS count FROM products WHERE slug = ?")
      .get(slug).count;
    counter++;
  }

  return slug;
};

app.post("/api/products", (req, res) => {
  const { name, price, brand, image, description, sku } = req.body;

  // Kontrollera om alla fält är ifyllda
  if (!name || !price || !brand || !image || !description || !sku) {
    return res.status(400).json({ message: "Alla fält måste fyllas i." });
  }

  // Skapa en unik slug automatiskt baserat på produktens namn
  const slug = generateUniqueSlug(name);

  const insert = db.prepare(
    "INSERT INTO products (name, price, brand, image, slug, description, sku, addedDate) VALUES (?, ?, ?, ?, ?, ?, ?, datetime('now'))"
  );

  try {
    insert.run(name, price, brand, image, slug, description, sku);
    res.status(201).json({ message: "Produkt tillagd!" });
  } catch (error) {
    console.error("Fel vid tillägg av produkt:", error);
    res.status(500).json({ message: "Internt serverfel" });
  }
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// Hämta produkt baserat på slug
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
    res.status(404).json({ message: "Produkt inte hittad" });
  }
});
