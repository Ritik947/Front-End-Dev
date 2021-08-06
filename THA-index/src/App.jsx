import "./App.css";
import ThaCard from "./components/ThaCard";
import { useState, useEffect } from "react";

function App() {
  const [cards, setCards] = useState(null);
  useEffect(() => {
    fetch("./thadata.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCards(data);
        console.log(cards);
      });
  }, []);
  return (
    <div className="App">
      <header className="App-header">FrontEnd - THAs</header>
      <main>
        <div className="desc">
          Welcome to the one who is viewing this deployment! <br />
          Within here, I have deployed the take-home-assignments I completed as
          part of the Frontend Course provided by Devsnest.
        </div>
        <>
          {cards ? (
            <div className="grid-container">
              {cards.map((card, index) => (
                <ThaCard key={index} number={card.number} text={card.text} />
              ))}
            </div>
          ) : (
            <div
              style={{
                fontSize: "2rem",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              Loading THAs
            </div>
          )}
        </>
      </main>
    </div>
  );
}

export default App;
