// const ProductCards = ()=>{
//     return (
//         <% // Sortera produkterna baserat på 'addedDate' i fallande ordning
//         products.sort(function(a, b) { return new Date(b.addedDate) - new
//         Date(a.addedDate); }); %>
//         <article class="popularproducts">
//           <% products.forEach(function(product) { %>
//           <div class="productcardMain">
//             <% if(new Date(product.addedDate).getTime() > new Date().getTime() - 7
//             * 24 * 60 * 60 * 1000) { %>
//             <div class="badge">Nyhet!</div>
//             <% } %>
//             <a href="/products/<%= product.slug %>">
//               <img src="<%= product.image %>" />
//             </a>
//             <div class="imgtext">
//               <h2><%= product.name %></h2>
//               <h2><%= product.price %></h2>
//             </div>
//             <p><%= product.brand %></p>
//             <a class="heart" href="#"><i class="bi bi-heart-fill"></i></a>
//             <a class="heart2" href="#"><i class="bi bi-heart"></i></a>
//           </div>
//           <% }); %>
//         </article>
// )
// }

// export default ProductCards;

import { useNavigate } from "react-router";
import LikeButton from "../LikeButton/LikeButton"; // Importera knappen

const ProductCards = ({ products }) => {
  const navigate = useNavigate();
  return (
    <article className="popularproducts p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => navigate(`/productdetails/${product.id}`)}
            className="productcardMain p-4 border rounded-lg shadow-lg relative"
          >
            <img src={product.image} className="w-full h-auto rounded-lg" />
            <h3 className="product-name text-center mt-2 text-lg font-semibold">
              {product.name}
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
