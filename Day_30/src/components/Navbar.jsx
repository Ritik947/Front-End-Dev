import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="App-header">
      <Link to="/" className="home-link">
        eZebuy
      </Link>
      <Link to="/fav" className="fav-link">
        Fav
      </Link>
      <div className="cart-link">Cart</div>
    </header>
  );
};

export default Navbar;
