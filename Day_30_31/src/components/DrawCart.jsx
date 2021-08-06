import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "../redux/slices/CartSlice";
import CartItem from "./CartItem";

const DrawCart = () => {
  const { cartItems, isCartOpen } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div
      className="cart"
      style={{
        transform: isCartOpen ? "none" : "translateX(40vw)",
        transition: "0.75s",
      }}
    >
      <div className="cart-header">
        <div>Your Items</div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            dispatch(toggleCart());
          }}
        >
          ❌
        </div>
      </div>
      <div className="cart-container">
        {cartItems.length === 0 ? (
          <div>Your cart is empty</div>
        ) : (
          cartItems.map((item, index) => (
            <CartItem
              key={index}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              index={index}
              quantity={item.quantity}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default DrawCart;
