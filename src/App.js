import React from 'react';
import './App.css';
import TodoList from "./components/TodoList";

function App() {
  return <>
    <header>{'TODO APP'}</header>

    <div className="todoapp">
      <TodoList/>
    </div>

<footer id='footer'>
</footer>
      </>
}

export default App;
