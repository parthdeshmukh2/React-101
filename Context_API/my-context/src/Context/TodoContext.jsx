import React, { createContext } from "react";

export const TodoContext= createContext();

export const TodoProvider=({children})=>{
    return   <TodoContext.Provider>{children}</TodoContext.Provider>


}