const getProduct = async () => {
  const data = await fetch("http://localhost:8000/api/product/1");
  const product = data.json();
  console.log(product);
};
const ProductDetails = () => {
  getProduct();
  return <div>ProductDetails</div>;
};

export default ProductDetails;
