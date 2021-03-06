import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addItemInCart, updateQuantity } from "../redux/slices/CartSlice";

const ProductDetails = () => {
  const item = useSelector((state) => state.product.currentProduct);
  const { cartItems } = useSelector((state) => state.cart);
  const [amount, setAmount] = useState(1);
  const dispatch = useDispatch();
  const addToCart = () => {
    let inCart = cartItems.some((el) => el.id === item.id);
    if (inCart) {
      let index = cartItems.findIndex((el) => el.id === item.id);
      dispatch(updateQuantity({ index, qty: amount }));
    } else {
      dispatch(addItemInCart({ ...item, quantity: amount }));
    }
  };

  return (
    <div className="product-details">
      <div
        className="product-details-image"
        style={{ backgroundImage: `url(${item.image})` }}
      ></div>
      <div
        style={{
          width: "60vw",
          display: "flex",
          flexDirection: "column",
          padding: "0 2rem",
        }}
      >
        <div className="product-details-title">{item.title}</div>
        <div className="product-details-desc">{item.description}</div>
        <div className="product-details-price">
          Rs. {Math.ceil(70 * item.price)}
        </div>
        <div className="quantity-selector">
          <button
            onClick={() => {
              if (amount < 2) {
                setAmount(amount);
              } else {
                setAmount(amount - 1);
              }
            }}
          >
            -
          </button>
          <input type="number" disabled value={amount} />
          <button
            onClick={() => {
              if (amount === 10) {
                setAmount(amount);
              } else {
                setAmount(amount + 1);
              }
            }}
          >
            +
          </button>
        </div>
        <button className="add-to-cart" onClick={addToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
