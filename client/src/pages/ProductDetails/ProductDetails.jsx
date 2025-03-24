import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import SimilarProducts from "../../components/SimilarProducts/SimilarProducts";

function ProductDetails() {
  let params = useParams();

  const [product, setProduct] = useState();
  const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/api/product/${params.slug}`)
      .then((resp) => resp.json())
      .then((product) => {
        setProduct(product);
        setSimilarProducts(product.similarProducts || []);
      });
  }, [params.slug]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <div className="container mx-auto p-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-auto md:w-auto h-[500px] object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2 text-left">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-xl text-gray-700 mt-2">{product.price} kr</p>
            <p className="mt-4 text-gray-600">{product.description}</p>
            <button className="mt-4 px-4 py-3 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
              Lägg i varukorg
            </button>
          </div>
        </div>
        <SimilarProducts similarProducts={similarProducts} />
      </div>
    </Layout>
  );
}

export default ProductDetails;
