import { useState } from "react";
import TodoItems from "./TodoItem";
export default function Form({addTodo}) {
  const [todo, setTodo] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    // console.log(todo);
    addTodo(todo);
    setTodo("");
  }

  return (
    <div className="mt-5 mb-10">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex justify-center gap-10"
      >
        <input
          type="text"
          name="task"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="task-input"
        />
        <button className="task-add-button">Add</button>
      </form>
    </div>
  );
}
