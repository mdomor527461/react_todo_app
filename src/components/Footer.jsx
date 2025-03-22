<<<<<<< HEAD
export default function Footer() {
  return (
    <div className="fixed bottom-0 w-full flex justify-around p-5 text-xl md:text-2xl text-white bg-green-500 p-6 font-bold">
      <h1 className="">
        Complete Task : {0}
      </h1>
      <h1 className="">
        Total Task : {0}
      </h1>
    </div>
  );
}
=======
export default function Footer({todos}){ 
    return <div className="bg-green-500 p-6 flex justify-around">
            <h1 className="text-2xl font-bold text-white">Completed task : {todos.filter(todo => todo.status).length}</h1>
            <h1 className="text-2xl font-bold text-white">Total task : {todos.length}</h1>
    </div>
}
>>>>>>> 91209ee8cba5c361fe9c5ca82813472020374d34
