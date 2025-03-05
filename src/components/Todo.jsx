import { useState } from "react";
import Form from "./Form";
import TodoItems from "./TodoItem";
export default function Todo(){
    const[todos, setTodos] = useState([]);
    const addTodo = (todo) => {
        // console.log("Adding todo: ", todo);
        setTodos([...todos, todo]);
        // console.log("Todos: ", todos);
    }
     
    const removeTodo = (index) => {
       setTodos( todos.filter((_, i) => i !== index));
    }

    return(
        <div>
            <Form addTodo={addTodo}/>
            <TodoItems todos={todos} removeTodo = {removeTodo}/>
        </div>
    )
}