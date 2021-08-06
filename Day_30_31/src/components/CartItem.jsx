import Delete from "./Delete";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../redux/slices/CartSlice";
import { updateQuantity } from "../redux/slices/CartSlice";

const CartItem = ({ id, image, title, price, index, quantity }) => {
  const dispatch = useDispatch();
  return (
    <div className="cart-item">
      <div
        className="cart-image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div
        style={{
          width: "35vw",
          display: "flex",
          flexDirection: "column",
          padding: "0 1rem",
          justifyContent: "center",
        }}
      >
        <div className="cart-title">{title}</div>
        <div className="cart-price">Rs. {Math.ceil(70 * price)}</div>
        <div className="cart-quantity-selector">
          <button
            disabled={quantity === 1 ? "disabled" : ""}
            onClick={() => {
              dispatch(updateQuantity({ index, qty: -1 }));
            }}
          >
            -
          </button>
          <input type="number" disabled value={quantity} />
          <button
            onClick={() => {
              dispatch(updateQuantity({ index, qty: 1 }));
            }}
          >
            +
          </button>
        </div>
      </div>
      <button
        onClick={() => {
          dispatch(removeItemFromCart(id));
        }}
      >
        <Delete />
      </button>
    </div>
  );
};

export default CartItem;
