import React, { ReactElement } from "react";
import { useState } from "react";
import "./App.css";
import ThemeContext from "./theme/ThemeContext";
import ThemeToggle from "./theme/ThemeToggle";
import Todos from "./Todos";

const App = (): ReactElement => {
  const [theme, setTheme] = useState<boolean>(false);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`App ${theme ? "dark" : ""}`}>
        <h1 style={{ textAlign: "center", padding: "1rem" }}>
          Yet Another TodoList
        </h1>
        <Todos />
        <ThemeToggle />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
