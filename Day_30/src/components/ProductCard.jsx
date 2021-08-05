import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentProduct } from "../redux/slices/ProductSlice";

const ProductCard = ({ id, title, image, desc, price }) => {
  const products = useSelector((state) => state.product.products);
  const [inWishlist, setInWishlist] = useState(false);
  const dispatch = useDispatch();
  return (
    <Link
      to={`/${id}`}
      onClick={() => dispatch(setCurrentProduct(products[id - 1]))}
      className="product-card"
    >
      <div
        className="product-image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="product-title">{title}</div>
      <div className="product-desc">{desc}</div>
      <div className="product-price">Rs. {price}</div>
    </Link>
  );
};

export default ProductCard;
