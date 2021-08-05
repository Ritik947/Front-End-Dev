import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="App-header">
      <Link to="/" className="home-link">
        eZebuy
      </Link>
      <div style={{ display: "flex" }}>
        <Link to="/wishlist" className="wish-link">
          Wishlist
        </Link>
        <div className="cart-link">Cart</div>
      </div>
    </header>
  );
};

export default Navbar;
