import "./App.css";
import GetTodo from "./components/GetTodo";
import DisplayTodo from "./components/DisplayTodo";

function App() {
  return (
    <div className="App-container">
      <header>To-Do App</header>
      <main>
        <GetTodo />
        <DisplayTodo />
      </main>
    </div>
  );
}

export default App;
