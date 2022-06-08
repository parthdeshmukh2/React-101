import React, { createContext } from "react";

export const ThemeContext= createContext();

export const TodoProvider=({children})=>{
    return   <ThemeContext.Provider>{children}</ThemeContext.Provider>


}