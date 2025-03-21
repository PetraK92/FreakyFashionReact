import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/products");
        if (!response.ok) throw new Error("Fel vid hämtning av produkter");

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Fel:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Produkter</h2>

      <button
        onClick={() => navigate("/admin/products/new")}
        className="mb-4 px-4 py-2 bg-emerald-500 text-white font-medium rounded hover:bg-emerald-800 transition"
      >
        Lägg till ny produkt
      </button>

      <div className="overflow-x-auto">
        <table className="w-full border border-black">
          <thead>
            <tr className="bg-neutral-500 text-white text-left border-b border-black">
              <th className="w-1/2 p-3 border-r border-black">Namn</th>
              <th className="w-1/4 p-3 border-r border-black">Pris</th>
              <th className="w-1/4 p-3">SKU</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="border-b border-black odd:bg-white even:bg-gray-200"
              >
                <td className="p-3 border-r border-black">{product.name}</td>
                <td className="p-3 border-r border-black">
                  {product.price} kr
                </td>
                <td className="p-3">{product.sku}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
