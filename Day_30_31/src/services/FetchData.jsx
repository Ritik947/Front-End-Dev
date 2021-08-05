const FetchProducts = async () => {
  const data = await fetch("https://fakestoreapi.com/products");
  const res = await data.json();
  return res;
};

export { FetchProducts };
