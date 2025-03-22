export default function TodoItems({ todos, removeTodo, updateTodo }) {

  return todos.map((todo, index) => {
    return (
      <div
        key={todo.name}
        className="flex items-center justify-center relative w-2/3 mx-auto bg-gray-200 mt-5 mb-5 p-5 rounded-md"
      >
        {/* Enlarge checkbox and reduce margin */}
        <input
          type="checkbox"
          className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 accent-green-500 mr-3"
          onClick={() => { updateTodo(index, todo.status) }}
        />

        <h1
          className={`font-bold text-xl md:text-2xl lg:text-3xl text-center flex-grow ${todo.status ? "line-through text-gray-500" : ""
            }`}
        >
          {todo.name}
        </h1>

        {/* Delete button */}
        <i
          className="fa-solid fa-xmark text-xl md:text-2xl lg:text-3xl font-bold cursor-pointer absolute right-5"
          onClick={() => removeTodo(index)}
        ></i>
      </div>


    );
  });
}
