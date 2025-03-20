export default function Footer({todos}){ 
    return <div className="bg-green-500 p-6 flex justify-around">
            <h1 className="text-2xl font-bold text-white">Completed task : {todos.filter(todo => todo.status).length}</h1>
            <h1 className="text-2xl font-bold text-white">Total task : {todos.length}</h1>
    </div>
}