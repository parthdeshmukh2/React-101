import React, { useState } from 'react'

const Input = () => {
    const[task, setTask]= useState("");
    const[data, setData]= useState([]);

    const AddTask=()=>{
        setData([...data, {
            id:Math.random*1000,
            value:task
        }])
        setTask("");
        console.log(data);


    }
  return (
    <div>
        <input type="text" placeholder='Add Task' onChange={(e)=> setTask(e.target.value)} value={task} />
        <button onClick={AddTask}>Add Task</button>
      
    </div>
  )
}

export default Input
