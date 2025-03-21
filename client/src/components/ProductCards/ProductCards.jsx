import { useNavigate, Link } from "react-router-dom";
import LikeButton from "../LikeButton/LikeButton";

const ProductCards = ({ products }) => {
  const navigate = useNavigate();
  return (
    <article className="popularproducts p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.slug}
            onClick={() => navigate(`/products/${product.slug}`)}
            className="productcardMain p-4 border rounded-lg shadow-lg relative"
          >
            <img src={product.image} className="w-full h-auto rounded-lg" />
            <h3 className="product-name text-center mt-2 text-lg font-semibold">
              <Link to={`/products/${product.slug}`}>{product.name}</Link>
            </h3>
            {/* LikeButton placerad i övre högra hörnet */}
            <div className="absolute top-2 right-2">
              <LikeButton />
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

export default ProductCards;
