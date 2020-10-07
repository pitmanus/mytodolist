import React, {useState} from 'react'
import TodoForm from "./TodoForm";
import DatePicker from 'react-datepicker/dist/react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import checksign from './../../src/checkmark-xxl.png';


function Todo({todos, completeTodo, removeTodo, updateTodo, addDate, doneDate}){
    const [edit, setEdit] = useState({
            id:null,
            value: ''
        });

    const [selectedDate, setSelectedDate] = useState(null)

    const [openDatePicker, setOpenDatePicker] = useState(false);

    const [item, setItem] = useState({
        id:null,
        value: null
    })

    const submiteDate = () => {
    addDate(item.id, item.value, selectedDate)
        console.log(selectedDate, item.id)
        setOpenDatePicker(false)
        setItem({id: null, value: null})
        setSelectedDate(null)
    }

    if (openDatePicker){
        return <>
            <div className='deadline-form'>
                <p>Pick a date</p>
        <DatePicker
            selected = {selectedDate}
            onChange = {date=>setSelectedDate(date)}
            dateFormat='dd/MM/yyyy'
            /*minDate={new Date()}*/
        />
        </div>
        <button onClick={submiteDate}>Confirm</button>
        </>
    }


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
         <div  key={todo.id} onClick={()=>{completeTodo(todo.id); doneDate(todo.id)}}>
             {todo.text} <div className={todo.date.getTime()<new Date().getTime()? 'after-deadline': 'before-deadline'}>{todo.date.getTime()!==new Date(null).getTime()? 'Deadline: ' + todo.date.toLocaleDateString() : '' }</div>

         </div>
            <div className='img'>{todo.isComplete? <img src={checksign} alt='img' width='50px' height='50px'/> : ''}</div>
            <div className='finish-date'> {todo.isComplete? 'Done on : ' + todo.doneDate : ''}</div>


             <span>

                 <button
                     className="deadline-button"
                     onClick={()=> {setOpenDatePicker(true); setItem({id:todo.id, value: todo.text})} }
                 >Set deadline</button>

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