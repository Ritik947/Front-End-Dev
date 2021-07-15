import "./App.css";
import "./components/Counter";
import React, { Component } from "react";
import Counter from "./components/Counter";

// function App() {
//   return (
//     <div className="App">
//       <header>Flip-Down</header>
//       <main></main>
//     </div>
//   );
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>State-Change-Counter</header>
        <main>
          <Counter />
          <Counter />
          <Counter />
          <Counter />
        </main>
      </div>
    );
  }
}

export default App;
