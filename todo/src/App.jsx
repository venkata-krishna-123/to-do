import React, { useState, useRef } from "react";
import TodoList from "./Components/Todolist";
import Navbar from "./Components/Navbar";
const App = () => {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  const addTodo = () => {
    const data = inputRef.current?.value?.trim();
    if (!data) return;

    const todo = {
      text: data,
      id: Date.now(), // Using Date.now() as a unique ID
      isCompleted: false,
    };
    setTodos([...todos, todo]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const UpdateTodo = (id) => {
    const newData = prompt("Enter new todo text:");
    if (newData?.trim() === "") return;

    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, text: newData };
        }
        return todo;
      });
    });
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="h-screen w-screen bg-red-400 flex items-center justify-center flex-col">
        <div className="flex gap-x-2">
          <input
            type="text"
            className="h-10 w-80 border-none outline-none rounded-lg px-3"
            ref={inputRef}
          />
          <button
            className="h-10 px-2 bg-black text-white border-none outline-none rounded-lg"
            onClick={addTodo}
          >
            Add
          </button>
        </div>

        <div className="h-96 w-96 bg-slate-400 mt-4">
          {todos.map((todo) => (
            <TodoList
              key={todo.id}
              text={todo.text}
              id={todo.id}
              deleteTodo={deleteTodo}
              UpdateTodo={UpdateTodo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
