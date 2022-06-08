import React, { createContext } from "react";

export const AuthContext= createContext();

export const TodoProvider=({children})=>{
    return   <AuthContext.Provider>{children}</AuthContext.Provider>


}