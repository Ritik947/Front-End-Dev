import "./App.css";
import Card from "./components/Card";
import { useState } from "react";

function App() {
  const [foods, setFoods] = useState([
    { name: "Pizza", calories: "56", url: "/images/image1.jpg" },
    { name: "Burger", calories: "69", url: "/images/image2.jpg" },
    { name: "Coke", calories: "500", url: "/images/image3.jpg" },
    { name: "Brownie", calories: "180", url: "/images/image4.jpg" },
    { name: "Fried Rice", calories: "90", url: "/images/image5.jpg" },
    { name: "Pani Puri", calories: "10", url: "/images/image6.jpg" },
  ]);
  return (
    <div className="App">
      <header>Foodpedia</header>
      <div className="wrap">
        <main>
          {foods.map((food, index) => (
            <Card
              key={index}
              food={food}
              foods={foods}
              setFoods={setFoods}
              index={index}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
