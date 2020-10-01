import React, {useState} from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";


function TodoList(){
    const [todos, setTodos] = useState([]);


    function addTodo(todo) {
        //it's prevent adding empty todos and with many whitespaces
        if (!todo.text || /ˆ\s*$/.test(todo.text)){
            return ;
        }

        const newTodos = [todo, ...todos];
        setTodos(newTodos);
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo=>todo.id !== id)
        setTodos(removeArr);
    };

    const completeTodo = id =>{
        let updatedTodos = todos.map(todo =>{
            if(todo.id == id){
                todo.isComplete = !todo.isComplete;
        }
            return todo;
        });
        setTodos(updatedTodos);
    }

return (
    <div>
<h1>Add new task</h1>
        <TodoForm onSubmit={addTodo} />
        <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        />
    </div>
)
}

export default TodoList