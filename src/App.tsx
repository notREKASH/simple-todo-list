import { useEffect, useState } from "react";
import "./App.css";
import InputNewTask from "./components/InputNewTask";
import TodoList from "./containers/TodoList";
import Footer from "./components/footer";

function App() {
  const [todos, setTodos] = useState<
    { id?: string; text: string; completed: boolean }[]
  >([{ id: "exemple", text: "Learn React", completed: false }]);

  const filterTodos = todos.filter((todo) => todo.id !== "exemple");

  // Auto saved
  useEffect(() => {
    if (filterTodos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(filterTodos));
    }
  }, [filterTodos]);

  // Auto load after mount
  useEffect(() => {
    const todos = localStorage.getItem("todos");
    if (todos) {
      setTodos(JSON.parse(todos));
    }
  }, []);

  return (
    <>
      <section className="w-5/6 flex flex-col gap-5 m-auto mt-2 align-middle justify-center md:w-3/4 lg:w-1/2">
        <h1 className="color-black font-bold text-4xl text-center">
          Todo List
        </h1>
        <h2 className="color-black text-center mt-2">
          A simple todo list app built with React, TypeScript, and Tailwind CSS
          without responsive design.
        </h2>
        <InputNewTask todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </section>
      <Footer />
    </>
  );
}

export default App;
