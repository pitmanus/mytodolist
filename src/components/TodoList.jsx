import React, {useState} from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";


function TodoList(){
    const [todos, setTodos] = useState([]);


    function addTodo(todo) {
        //it's prevent adding empty todos and with whitespaces
        if (!todo.text || /ˆ\s*$/.test(todo.text)){
            return ;
        }

        const newTodos = [todo, ...todos];
        setTodos(newTodos);
    }


    const updateTodo = (todoId, newValue) =>{
        if (!newValue.text || /ˆ\s*$/.test(newValue.text)){
            return ;
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    }

    const addDate = (todoId, todoText, date)=>{
        let newItem = ({
            id: todoId,
            text: todoText,
            date: new Date(date)
        })
        setTodos(prev => prev.map(item => (item.id === todoId ? newItem : item)));
    }

    const doneDate = (id)=>{
        let updatedTodos = todos.map(todo =>{
            if(todo.id === id){
                todo.doneDate = new Date();
            }
            return todo;
        });
        setTodos(updatedTodos);
    }



    const removeTodo = id => {
        const removeArr = [...todos].filter(todo=>todo.id !== id)
        setTodos(removeArr);
    };


    const completeTodo = id =>{
        let updatedTodos = todos.map(todo =>{
            if(todo.id === id){
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
        updateTodo = {updateTodo}
        addDate = {addDate}
        doneDate = {doneDate}
        />
    </div>
)
}

export default TodoList