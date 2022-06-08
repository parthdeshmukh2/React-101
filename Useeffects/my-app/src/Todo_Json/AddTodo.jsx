import React, { useState } from 'react'

const AddTodo = ({onAdd}) => {

    const[task, setTask]= useState("");

    const handleClick= async(value)=>{
        try {
            let res = await fetch(`http://localhost:8080/todos`,{
                method:"POST",
                headers:{"content-type":"application/json"},
                body:JSON.stringify({
                    value,
                    isCompleted:false,
                }),

            
            });
            let data = res.json();
            onAdd(data);
            
        } catch (error) {
            console.log(error)
            
        }

    }

  return (
    <div>
        <input type="text" placeholder='Enter Task' onChange={(e)=> setTask(e.target.value)}  />
        <button onClick={()=>handleClick(task)}>Add Task</button>
      
    </div>
  )
}

export default AddTodo
