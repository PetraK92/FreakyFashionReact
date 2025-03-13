import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home/Home";
import SearchResults from "./pages/SearchResults/SearchResults";
import ProductCards from "./components/ProductCards/ProductCards";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

function App() {
  const [products, setProducts] = useState([]); // State för att lagra produkterna
  const [loading, setLoading] = useState(true); // Laddningsstatus
  const [error, setError] = useState(null); // Felhantering

  useEffect(() => {
    // Hämta produkter från API
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/products"); // Byt ut mot din API-url
        if (!response.ok) {
          throw new Error("Något gick fel vid hämtning av produkter");
        }
        const data = await response.json(); // Konvertera till JSON
        setProducts(data); // Uppdatera state
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); // Avsluta laddning
      }
    };

    fetchProducts();
  }, []); // Körs en gång när komponenten mountas

  if (loading) return <p>Laddar produkter...</p>;
  if (error) return <p>Ett fel uppstod: {error}</p>;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<div>Det här är ett test</div>} />
          <Route
            path="/products"
            element={<ProductCards products={products} />}
          />
          <Route
            path="/search/:query"
            element={<SearchResults products={products} />}
          />
          <Route path="/productdetails/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
