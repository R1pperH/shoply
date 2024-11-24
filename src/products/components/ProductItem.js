import react from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";

import ProductModal from "../pages/ProductModal";
import AuthContext from "../../hooks/auth-hook";

export default function ProductItem({ items }) {
  const auth = useContext(AuthContext);
  const products = items.map((prod) => (
    <div key={prod.id}>
      <Link to={`/products/${prod._id}`}>
        <img src={prod.image} alt={prod.name} />
      </Link>
      <h3>{prod.name}</h3>
      <p>{prod.summary}</p>
      <p>${prod.price}</p>
      <Link to={`/cart`}>
        <button onClick={() => auth.cart(prod.id)}>Add to Cart</button>
      </Link>
    </div>
  ));

  return <>{products.length > 0 ? products : <p>Loading products...</p>}</>;
}
