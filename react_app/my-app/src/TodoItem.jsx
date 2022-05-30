import React, { useState } from 'react'
import RandomComp from './RandomComp';
const ToDoList = ({todos, setTodo}) => {

    const [title, setTitle] =useState('');
    const createTodo = () => {
        const todoitem = {
            id: Math.random() * 100,
            title,
        }

        setTodo([...todos, todoitem]);
    }
  return (
    <div>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={createTodo}>add todo</button>

      <RandomComp setToDo={setTodo} />
      {todos.map(({id, title}) => <div key={id}>{title}</div>)}
    </div>
  )
}

export default ToDoList
