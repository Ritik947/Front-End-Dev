import "./App.css";
import Input from "./components/Input";
import Details from "./components/Details";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">Magic of Redux</header>
      <main>
        <Input />
        <Details />
      </main>
    </div>
  );
};

export default App;
