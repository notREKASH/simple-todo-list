import { Dispatch, SetStateAction, SyntheticEvent, useState } from "react";

interface Todos {
  text: string;
  completed: boolean;
}

interface InputNewTaskProps {
  todos: Todos[];
  setTodos: Dispatch<SetStateAction<Todos[]>>;
}

function InputNewTask({ todos, setTodos }: InputNewTaskProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleAddTask = (e: SyntheticEvent) => {
    e.preventDefault();
    const addTodos = [...todos];
    addTodos.push({ text: inputValue, completed: false });
    setTodos(addTodos);
    setInputValue("");
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleAddTask(e);
        }}>
        <input
          type="text"
          className="border border-gray-600 rounded-md p-2 w-full"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          placeholder="Add a new task"
        />
      </form>
    </div>
  );
}

export default InputNewTask;
