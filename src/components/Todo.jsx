import React, {useState} from 'react'
import TodoForm from "./TodoForm";
import DatePicker from 'react-datepicker/dist/react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Todo({todos, completeTodo, removeTodo, updateTodo, deadline}){
    const [edit, setEdit] = useState({
            id:null,
            value: ''
        });

    const[selectedDate, setSelectedDate]=useState(null);


    const submitUpdate = value =>{
        updateTodo(edit.id, value)
        setEdit({
          id: null,
          value: ''
        })
    }
    if (edit.id){
        return <TodoForm edit={edit} onSubmit = {submitUpdate}/>
    }


    return todos.map((todo, index)=> (
        <div className={todo.isComplete ? 'todo-row complete' :
        'todo-row'} key={index}
        >
         <div  key={todo.id} onClick={()=>completeTodo(todo.id)}>
             {todo.text}
         </div>
            <div className='img'>{todo.isComplete? <img src='https://www.iconsdb.com/icons/preview/green/checkmark-xxl.png' alt='img' width='50px' height='50px'/> : ''}</div>
            <div className='finish-date'> {todo.isComplete? 'Done on : ' + new Date().toLocaleString() : ''}</div>

            <form className='deadline-form'
            ><div>Set deadline</div><DatePicker
                selected={selectedDate}
                onChange={date=>setSelectedDate(date)}
                dateFormat = 'dd/MM/yyyy'
                minDate = {new Date()}
            /></form>
             <span>
             <button
                 className="delete-button"
                 onClick={()=>removeTodo(todo.id)}
             >Delete</button>
             <button className="edit-button"
                     onClick={()=>setEdit({id:todo.id, value: todo.text})}
             >Update</button>
             </span>

        </div>
    ))
}

export default Todo