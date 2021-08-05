import { useSelector, useDispatch } from "react-redux";
import Delete from "../components/Delete";
import { removeItemFromWishlist } from "../redux/slices/WishSlice";

const Wishlist = () => {
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  return (
    <div className="wish-container">
      {wishlistItems.length === 0 ? (
        <div style={{ fontSize: "1.5rem", fontWeight: "700" }}>
          Add items to wishlist
        </div>
      ) : (
        wishlistItems.map((item, index) => (
          <div className="wish-item" key={index}>
            <div
              className="wish-image"
              style={{ backgroundImage: `url(${item.image})` }}
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
              <div className="wish-title">{item.title}</div>
              <div className="wish-price">Rs. {Math.ceil(70 * item.price)}</div>
            </div>
            <button
              onClick={() => {
                dispatch(removeItemFromWishlist(item.id));
                console.log(wishlistItems);
              }}
            >
              <Delete />
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Wishlist;
