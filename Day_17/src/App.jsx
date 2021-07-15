import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <header>Foodpedia</header>
      <div className="wrap">
        <main>
          <Card number="1" />
          <Card number="2" />
          <Card number="3" />
          <Card number="4" />
          <Card number="5" />
          <Card number="6" />
        </main>
      </div>
    </div>
  );
}

export default App;
