import Card from "./components/Card";
import "./style.css";
import Chessboard from "./components/Chessboard";

function App() {
  return (
    <div className="app">
      <header>Meme Corner</header>
      <div className="grid-container">
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
      </div>
      <div className="chess">
        <Chessboard />
      </div>
    </div>
  );
}

export default App;
