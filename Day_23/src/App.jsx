import "./App.css";
import Search from "./components/Search";
import Results from "./components/Results";
import logo from "./assets/images/logo.png";
import { useState } from "react";

function App() {
  const [searchData, setSearchData] = useState(null);
  const [status, setStatus] = useState("idle");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="" />
      </header>
      <main>
        <Search setStatus={setStatus} setSearchData={setSearchData} />
        <Results status={status} searchData={searchData} />
      </main>
    </div>
  );
}

export default App;
