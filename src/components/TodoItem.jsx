export default function TodoItems({ todos ,removeTodo}) {

  return todos.map((todo ,index) => {
    return (
        <div
        key={todo}
        className="flex items-center justify-center relative w-2/3 mx-auto bg-gray-200 mt-5 p-5 rounded-md"
      >
        <h1 className="font-bold text-xl md:text-2xl lg:text-3xl text-center flex-grow">
          {todo}
        </h1>
        <i className="fa-solid fa-xmark text-xl md:text-2xl lg:text-3xl font-bold cursor-pointer absolute right-5" onClick={() => removeTodo(index)}></i>
      </div>
      
    );
  });
}
