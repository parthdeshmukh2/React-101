import React from 'react'
import { useState } from 'react';
import Input from './Input';

const Todo = () => {
    const [login, setLogin] =useState(false);
  return (
    <div>
        <button onClick={()=> setLogin(login===true ? false : true)}>{login ? "Logout" : "Login"}</button>

        {login && <Input/>}
      
    </div>
  )
}

export default Todo
