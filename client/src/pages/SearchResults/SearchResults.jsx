import { Link, useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

const SearchResults = ({ products }) => {
  const { query } = useParams();
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Layout>
      <div className="p-4">
        <h2 className="text-2xl font-bold">{`Sökresultat för "${query}"`}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="p-4 border rounded-lg shadow-lg">
                <Link to={`/products/${product.slug}`}>
                  <img
                    src={product.image}
                    className="w-full h-auto rounded-lg"
                  />
                </Link>
                <h3 className="text-center mt-2 text-lg font-semibold">
                  {product.name}
                </h3>
              </div>
            ))
          ) : (
            <p>Inga produkter matchade din sökning.</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default SearchResults;
