import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "../redux/slices/CartSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isCartOpen } = useSelector((state) => state.cart);
  return (
    <>
      <header
        className="App-header"
        style={{ paddingRight: isCartOpen ? "25px" : "8px" }}
      >
        <Link to="/" className="home-link">
          eZebuy
        </Link>
        <div style={{ display: "flex" }}>
          <Link to="/wishlist" className="wish-link">
            ❤
          </Link>
          <div
            className="cart-link"
            onClick={() => {
              dispatch(toggleCart());
            }}
          >
            🛒
          </div>
        </div>
      </header>
      <div
        style={{
          height: "10vh",
          width: "100%",
        }}
      ></div>
    </>
  );
};

export default Navbar;
