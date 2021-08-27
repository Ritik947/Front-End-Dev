import React, { Dispatch, SetStateAction } from "react";
import { TodoType } from "./Todos";

interface TodoListProps {
  title: string;
  setTodos: Dispatch<SetStateAction<TodoType[]>>;
  todos: TodoType[];
}

const TodoList = ({ title, setTodos, todos }: TodoListProps) => {
  return (
    <div className="todo-time">
      <div
        style={{
          padding: "0.5rem",
          fontSize: "1.1rem",
        }}
      >
        {title}
      </div>
      <button
        style={{
          padding: "0 0.5rem",
          fontSize: "0.8rem",
          backgroundColor: "red",
          color: "white",
          borderRadius: "0.5rem",
        }}
        onClick={() => {
          setTodos(todos.filter((todo) => todo.title !== title));
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default TodoList;
