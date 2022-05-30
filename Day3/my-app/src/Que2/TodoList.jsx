import React from 'react'
import Todos from './Todos'


const TodoList = ({todo, deleteTodo}) => {
  return (
    <div>
        <p>

            {todo.map((elem)=>(
                <Todos key= {todo.id} value={todo.value} deletTodo={deleteTodo}/>
            ))}
        </p>
      
    </div>
  )
}

export default TodoList
