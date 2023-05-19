import React from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./components/TodoContext";

function App() {
  return (
    <TodoProvider>
      <div className="h-screen mx-auto bg-slate-200">
        <div className="flex flex-col justify-center items-center gap-y-4">
          <h3 className="capitalize text-center mt-9">todo input</h3>
          <TodoInput />
          <TodoList />
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
