import { useSelector } from "react-redux";

const Details = () => {
  const name = useSelector((state) => state.name);
  const email = useSelector((state) => state.email);
  return (
    <div className="details-wrapper">
      <div>Username: {name}</div>
      <div>Email: {email}</div>
    </div>
  );
};

export default Details;
