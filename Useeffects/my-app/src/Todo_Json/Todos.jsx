import React, { useEffect, useState } from 'react'
import AddTodo from './AddTodo';
import Todo from './Todo';

const Todos = () => {
const[todos, setTodos]= useState([]);

const onAdd=(newTodo)=>{
    setTodos([...todos, newTodo]);
}

const onDelete=(id)=>{
    const newTodo= todos.filter((todo)=> todo.id!==id)
}

useEffect(()=>{
    const getData=async()=>{
        try {
            let res = await fetch(`http://localhost:8080/todos`);
            let data = await res.json();
            setTodos(data);
            console.log(data);
            
        } catch (error) {
            console.log(error)
            
        }
    }
    getData();
},[]);

  return (
    <div>
       <AddTodo onAdd={onAdd}/>

      {todos.map((elem)=> <Todo key={elem.id} todo={elem} onDelete={onDelete} />)}
        
      
    </div>
  )
}

export default Todos
