import ProductCard from "../components/ProductCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../redux/slices/ProductSlice";

const ProductCatalog = () => {
  const { products, status } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "success") return;
    dispatch(fetchAllProducts());
  }, [dispatch, status]);
  return (
    <div className="product-grid">
      {status === "loading"
        ? "Loading Products"
        : products.map((item, index) => (
            <ProductCard
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              desc={item.description}
              price={item.price}
            />
          ))}
    </div>
  );
};

export default ProductCatalog;
