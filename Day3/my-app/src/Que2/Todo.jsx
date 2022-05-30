import React, { useState } from 'react'
import {v4 as uuidv4} from "uuid";
import TodoItem from './TodoItem';
import TodoList from './TodoList';

const Todo = () => {

    const [todo, setTodo]= useState([]);

    const addTodo=(task)=>{
        setTodo([...todo,{
            id:uuidv4(),
            value:task
        }]);
        console.log(todo);
    };

    const deleteTodo=(value)=>{
        setTodo(todo.filter((todos)=> todo !== value))
    };
  return (
    <div>
        <TodoItem addTodo={addTodo}/>
        <TodoList todo={todo} deleteTodo={deleteTodo}/>
       
      
    </div>
  )
}

export default Todo
