import { Dispatch, SetStateAction } from "react";

interface Todos {
  text: string;
  completed: boolean;
}

interface InputNewTaskProps {
  todos: Todos[];
  setTodos: Dispatch<SetStateAction<Todos[]>>;
}

function TodoList({ todos, setTodos }: InputNewTaskProps) {
  const handleCheckTask = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleDeleteTask = (index: number) => {
    const newTodos = todos.filter((_, i) => i != index);
    setTodos(newTodos);
    console.log(`Todo: ${index} has delete with success!`);
  };

  return (
    <div className="w-full gap-1">
      <h3 className="text-xl">List of tasks</h3>
      {todos.map((todo, index) => (
        <div key={index} className="mt-2">
          <div
            className={`${
              todo.completed
                ? "bg-green-600 opacity-80 outline outline-2 outline-green-800"
                : "outline outline-2 outline-red-600"
            } bg-white shadow-md rounded px-4 py-2 flex justify-between items-center transition-all duration-300 w-full`}>
            <p>{todo.text}</p>
            <div>
              <button
                onClick={() => {
                  handleCheckTask(index);
                }}>
                {todo.completed ? "❌" : "✔️"}
              </button>
              {todo.completed && (
                <button
                  onClick={() => {
                    handleDeleteTask(index);
                  }}>
                  <span role="img" aria-label="delete">
                    🗑️
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
