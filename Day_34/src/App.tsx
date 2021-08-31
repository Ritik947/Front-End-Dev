import React, { ReactElement } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote, delNote } from "./actions";
import "./App.css";
import { reducerType } from "./reducers";
import ThemeContext from "./theme/ThemeContext";
import ThemeToggle from "./theme/ThemeToggle";
import logo from "./assets/delete.svg";

const App = (): ReactElement => {
  const notes = useSelector((state: reducerType) => state.notes);
  const dispatch = useDispatch();
  const [input, setInput] = useState<string>("");
  const [theme, setTheme] = useState<boolean>(false);
  console.log(input);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`App ${theme ? "dark" : ""}`}>
        <h1
          style={{
            textAlign: "center",
            padding: "1rem",
          }}
        >
          Notes App
        </h1>
        <div className="input-container">
          <input
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button
            onClick={() => {
              if (input.trim()) {
                dispatch(addNote(input));
              }
              setInput("");
            }}
          >
            Add Note
          </button>
        </div>
        {notes.length === 0 ? (
          <h2
            style={{
              width: "max-content",
              height: "max-content",
              position: "fixed",
              margin: "auto",
              inset: "0",
            }}
          >
            Add Notes Here
          </h2>
        ) : (
          <div className="notes-grid">
            {notes.map((note: string, index: number) => (
              <div className="note-container">
                <div className="note-item">{note}</div>
                <div
                  style={{
                    position: "absolute",
                    top: "0.5rem",
                    right: "0.5rem",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    dispatch(delNote(index));
                  }}
                >
                  <img src={logo} alt="" width="20px" height="20px" />
                </div>
              </div>
            ))}
          </div>
        )}

        <ThemeToggle />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
