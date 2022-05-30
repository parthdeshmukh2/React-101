import React, { useState } from 'react'
import Todo from './Todo';

const TodoItem = ({addTodo}) => {
    const[task, setTask]= useState("");
  
  return (
    <div>
        <input onChange={(e)=> setTask(e.target.value)} value={task} placeholder="Enter Task" type="text" />
        <button onClick={()=> {
            addTodo(task);
            setTask("");
        }}>Add Task</button>
         
        
      
    </div>
  )
}

export default TodoItem
