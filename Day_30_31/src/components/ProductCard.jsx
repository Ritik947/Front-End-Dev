import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentProduct } from "../redux/slices/ProductSlice";
import {
  addItemInWishlist,
  removeItemFromWishlist,
} from "../redux/slices/WishSlice";
import Heart from "./Heart";

const ProductCard = ({ id, title, image, desc, price, inWishlist }) => {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  // console.log(inWishlist);
  return (
    <Link
      to={`/${id}`}
      onClick={() => dispatch(setCurrentProduct(products[id - 1]))}
      className="product-card"
    >
      <button
        onClick={(e) => {
          e.preventDefault();
          if (inWishlist) {
            dispatch(removeItemFromWishlist(id));
          } else {
            dispatch(addItemInWishlist({ id, title, image, desc, price }));
          }
        }}
      >
        <Heart color={inWishlist ? "red" : "#ccc"} />
      </button>
      <div
        className="product-image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="product-title">{title}</div>
      <div className="product-desc">{desc}</div>
      <div className="product-price">Rs. {Math.ceil(70 * price)}</div>
    </Link>
  );
};

export default ProductCard;
