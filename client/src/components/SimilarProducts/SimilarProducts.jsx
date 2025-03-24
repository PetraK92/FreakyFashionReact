import { Link } from "react-router-dom";

const SimilarProducts = ({ similarProducts }) => {
  console.log(similarProducts);
  return (
    <div className="mt-12 hidden md:block">
      <h4 className="text-xl font-semibold mb-8 text-center">
        Liknande produkter
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {similarProducts.length > 0 ? (
          similarProducts.map((product) => (
            <div
              key={product.slug}
              className="border rounded-lg shadow-md p-4 bg-white"
            >
              <Link to={`/products/${product.slug}`}>
                <div className="flex justify-center">
                  <img
                    src={product.image}
                    alt={`Bild på ${product.name}`}
                    className="w-auto h-64 object-cover rounded-lg"
                  />
                </div>
              </Link>
              <div className="mt-2 text-center">
                <h2 className="text-lg font-bold">{product.name}</h2>
                <h2 className="text-gray-700">{product.price} SEK</h2>
                <p className="text-sm text-gray-500">{product.brand}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Inga liknande produkter tillgängliga.</p>
        )}
      </div>
    </div>
  );
};

export default SimilarProducts;
