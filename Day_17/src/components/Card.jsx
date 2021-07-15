const Card = (props) => {
  const food = [
    { name: "Pizza", calories: "56" },
    { name: "Burger", calories: "69" },
    { name: "Coke", calories: "500" },
    { name: "Brownie", calories: "180" },
    { name: "Fried Rice", calories: "90" },
    { name: "Pani Puri", calories: "10" },
  ];
  let url = "/images/image" + props.number + ".jpg";
  return (
    <div className="container">
      <div className="card">
        <div className="img-container">
          <img src={url} alt="" />
        </div>
        <div className="title">{food[props.number - 1].name}</div>
        <div className="calorie">
          Calories: {food[props.number - 1].calories}
        </div>
      </div>
    </div>
  );
};

export default Card;
