export default function Cart(props) {
  const cartProduct = props.cart.map((item) => (
    <div>
      <img src={item.image} alt={item.name} />
      <div>
        <h3>{item.name}</h3>
        <p>{item.summary}</p>
        <p>${item.price}</p>
      </div>
      <button>Place Order</button>
    </div>
  ));
  console.log(props);
  return <h1>{cartProduct}</h1>;
}
