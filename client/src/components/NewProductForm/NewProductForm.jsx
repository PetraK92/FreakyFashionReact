import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewProductForm = () => {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    image: "",
    brand: "",
    sku: "",
    price: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: name === "price" ? Number(value) : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      });

      if (!response.ok) throw new Error("Misslyckades att lägga till produkt");

      alert("Produkt tillagd!");
      navigate("/admin/products"); // Navigera tillbaka till admin-sidan
    } catch (error) {
      console.error("Fel vid tillägg:", error);
      alert("Något gick fel, försök igen.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md space-y-4 ml-4"
    >
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
        Lägg till ny produkt
      </h3>

      <div className="flex flex-col">
        <label className="font-medium text-gray-700">Namn:</label>
        <input
          type="text"
          name="name"
          value={productData.name}
          onChange={handleChange}
          required
          className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
        />
      </div>

      <div className="flex flex-col">
        <label className="font-medium text-gray-700">Beskrivning:</label>
        <textarea
          name="description"
          value={productData.description}
          onChange={handleChange}
          required
          rows="4"
          className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
        />
      </div>

      <div className="flex flex-col">
        <label className="font-medium text-gray-700">Bild URL:</label>
        <input
          type="text"
          name="image"
          value={productData.image}
          onChange={handleChange}
          required
          className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
        />
      </div>

      <div className="flex flex-col">
        <label className="font-medium text-gray-700">Märke:</label>
        <input
          type="text"
          name="brand"
          value={productData.brand}
          onChange={handleChange}
          required
          className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
        />
      </div>

      <div className="flex flex-col">
        <label className="font-medium text-gray-700">SKU:</label>
        <input
          type="text"
          name="sku"
          value={productData.sku}
          onChange={handleChange}
          required
          className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
        />
      </div>

      <div className="flex flex-col">
        <label className="font-medium text-gray-700">Pris:</label>
        <input
          type="number"
          name="price"
          value={productData.price}
          onChange={handleChange}
          required
          className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-emerald-500 text-white p-3 rounded-md hover:bg-emerald-800 transition"
      >
        Lägg till produkt
      </button>
    </form>
  );
};

export default NewProductForm;
