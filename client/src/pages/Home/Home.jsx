import { useEffect, useState } from "react";
import EndIcons from "../../components/EndIcons/EndIcons";
import Hero from "../../components/Hero/Hero";
import LikeButton from "../../components/LikeButton/LikeButton";
import ProductCards from "../../components/ProductCards/ProductCards";
import Spots from "../../components/Spots/Spots";
import Layout from "../../components/Layout/Layout";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetch("http://localhost:8000/api/products");
      const productData = await data.json();
      setProducts(productData);
    };
    getProducts();
  }, []);
  console.log("products ", products);
  return (
    <Layout>
      <Hero />
      <Spots />
      <ProductCards products={products} />
      <LikeButton />
      <EndIcons />
    </Layout>
  );
};

export default Home;
