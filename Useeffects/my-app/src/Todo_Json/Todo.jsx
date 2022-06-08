import React, { useEffect } from "react";

const Todo = ({ todo, onDelete }) => {
   
  const handleDelete = async () => {
    try {
      let res = await fetch(`http://localhost:8080/todos/${todo.id}`,{
          method:"DELETE",
          headers:{"content-type": "application/json"},

      });
      onDelete(todo.id);
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <div>
      <div>
        <h1>{todo.value}</h1>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Todo;
