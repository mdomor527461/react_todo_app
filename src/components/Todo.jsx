import { useState } from "react";
import Form from "./Form";
import TodoItems from "./TodoItem";
import Footer from "./Footer";
export default function Todo(){
    const[todos, setTodos] = useState([]);
    const addTodo = ({todo}) => {
        // console.log("Adding todo: ", todo);
        setTodos([...todos, { name: todo.name, status: todo.status }]);
        // console.log("Todos: ", todos);
    }
    console.log(todos);
     
    const removeTodo = (index) => {
       setTodos( todos.filter((_, i) => i !== index));
    }
    
    const updateTodo = (index, status) => {
        const newTodos = [...todos];
        newTodos[index].status = !status;
        setTodos(newTodos);
    }

    return(
        <div>
            <Form addTodo={addTodo}/>
            <TodoItems todos={todos} removeTodo = {removeTodo} updateTodo = {updateTodo}/>
            <Footer todos={todos}/>
        </div>
    )
}