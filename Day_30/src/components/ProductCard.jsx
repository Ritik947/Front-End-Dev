const ProductCard = ({ title, image, desc, price }) => {
  return (
    <div className="product-card">
      <div
        className="product-image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="product-title">{title}</div>
      <div className="product-desc">{desc}</div>
      <div className="product-price">Rs. {price}</div>
    </div>
  );
};

export default ProductCard;
