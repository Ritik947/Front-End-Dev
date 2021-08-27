import React, { useState } from "react";
import TodoList from "./TodoList";

export interface TodoType {
  title: string;
}

const Todos = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [input, setInput] = useState<string>("");

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className="add-todo">
        <input
          type="text"
          style={{
            padding: "0.25rem 0.5rem",
            fontSize: "1.25rem",
            marginRight: "0.8rem",
          }}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
        />
        <button
          style={{
            padding: "0.25rem 0.5rem",
            fontSize: "1.25rem",
            backgroundColor: "#0B5ED7",
            color: "white",
          }}
          onClick={() => {
            if (input.trim() !== "") {
              setTodos([...todos, { title: input }]);
            }
            setInput("");
          }}
        >
          Add Todo
        </button>
      </div>
      <div className="todolist">
        {todos.map((todo, index) => (
          <TodoList title={todo.title} setTodos={setTodos} todos={todos} />
        ))}
      </div>
    </div>
  );
};

export default Todos;
