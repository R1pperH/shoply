import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../hooks/auth-hook";
import axios from "axios";

export default function ProductModal() {
  const [product, setProduct] = useState(null);
  const auth = useContext(AuthContext);
  const { id } = useParams();

  useEffect(() => {
    async function getData() {
      const getData = await axios.get(
        `http://localhost:5000/api/products/${id}`
      );
      setProduct(getData.data);
    }
    getData();
  }, []);

  console.log(product);

  if (!product) {
    return <h1>No products To Show....</h1>;
  }
  return (
    <>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <Link to={`/cart`}>
        <button onClick={() => auth.cart(product._id)}>Add to Cart</button>
      </Link>
    </>
  );
}
