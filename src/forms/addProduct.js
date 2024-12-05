import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import AuthContext from "../hooks/auth-hook";

export default function MakeProduct() {
  const [makeProduct, setMakeProduct] = useState({
    name: "",
    price: 0,
    description: "",
    summary: "",
    quantity: 50,
    image: "",
  });

  const [uid, setUid] = useState(null);

  const auth = useContext(AuthContext);

  // useEffect(() => {
  //   setUid(auth.userId);
  // }, []);

  console.log(auth.userId);

  async function submitProd(e) {
    e.preventDefault();
    try {
      const formData = new FormData();

      formData.append("name", makeProduct.name);
      formData.append("price", makeProduct.price);
      formData.append("description", makeProduct.description);
      formData.append("summary", makeProduct.summary);
      formData.append("quantity", makeProduct.quantity);
      // formData.append("image", makeProduct.image);

      const sendProd = await axios.post(
        `http://localhost:5000/api/products/addProduct/${auth.userId}`,
        formData
      );

      console.log(sendProd);
    } catch (err) {
      console.log(err);
    }
  }

  function prodDetail(e) {
    const { name, value } = e.target;
    setMakeProduct({
      ...makeProduct,
      [name]: value,
    });
  }
  return (
    <>
      <form onSubmit={submitProd}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="name"
          value={makeProduct.name}
          placeholder="Title"
          onChange={prodDetail}
        />

        <label htmlFor="price">Price</label>
        <input
          type="number"
          name="price"
          id="price"
          value={makeProduct.price}
          onChange={prodDetail}
          placeholder="Price"
        />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          placeholder="description"
          value={makeProduct.description}
          onChange={prodDetail}
        />

        <label htmlFor="quantity">Quantity</label>
        <input
          type="number"
          name="quantity"
          id="quantity"
          placeholder="quantity"
          value={makeProduct.quantity}
          onChange={prodDetail}
        />

        <label htmlFor="summary">Detail</label>
        <input
          type="text"
          id="summary"
          name="summary"
          placeholder="summary"
          value={makeProduct.summary}
          onChange={prodDetail}
        />

        <label htmlFor="image">Image</label>
        <input type="file" name="image" id="image" />

        <button type="submit">Add Product</button>
      </form>
    </>
  );
}
