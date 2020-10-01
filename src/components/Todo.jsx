import React, {useState} from 'react'
import TodoForm from "./TodoForm";
import {deleteIconic} from 'react-icons-kit/typicons/deleteIconic'
import {edit} from 'react-icons-kit/feather/edit'

function Todo({todos, completeTodo, removeTodo}){
    const [edit, setEdit] = useState({
            id:null,
            value: ''
        })

    return todos.map((todo, index)=> (
        <div className={todo.isComplete ? 'todo-row complete' :
        'todo-row'} key={index}
        >
         <div key={todo.id} onClick={()=>completeTodo(todo.id)}>
             {todo.text}
         </div>
             <span>
             <button
                 className='delete-icon'
                 onClick={()=>removeTodo(todo.id)}
             >Delete</button>
             <button className='edit-icon'
                     onClick={()=>setEdit({id:todo.id, value: todo.text})}
             >Update</button>
             </span>

        </div>
    ))
}

export default Todo