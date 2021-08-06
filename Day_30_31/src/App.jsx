import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import DrawCart from "./components/DrawCart";
import ProductCatalog from "./screens/ProductCatalog";
import ProductDetails from "./screens/ProductDetails";
import Wishlist from "./screens/Wishlist";
import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "./redux/slices/CartSlice";

function App() {
  const { isCartOpen } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className={isCartOpen ? "App noscroll" : "App"}>
      <div
        className="overlay"
        style={{ visibility: isCartOpen ? "" : "hidden" }}
        onClick={() => {
          dispatch(toggleCart());
        }}
      ></div>
      <Router basename="/Front-End-Dev/Day_30_31/build/">
        <Navbar />
        <DrawCart />
        <Switch>
          <Route exact path="/">
            <ProductCatalog />
          </Route>
          <Route exact path="/wishlist">
            <Wishlist />
          </Route>
          <Route exact path="/:id">
            <ProductDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
