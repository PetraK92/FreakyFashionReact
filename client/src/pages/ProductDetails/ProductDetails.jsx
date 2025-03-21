import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

function ProductDetails() {
  let params = useParams();

  const [product, setProduct] = useState();

  useEffect(() => {
    fetch(`http://localhost:8000/api/product/${params.slug}`)
      .then((resp) => resp.json())
      .then((product) => {
        setProduct(product);
      });
  }, [params.slug]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <h1>{product.name}</h1>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <p>{product.image}</p>
    </Layout>
  );
}

export default ProductDetails;
