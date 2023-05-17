import { createContext, useEffect, useState } from "react"
import api from "../axios";


export const AuthContext = createContext()

export const AuthContextProvider =({children})=>{  
    //to make userdata avaiable everywhere on the website
    const [currentUser,setCurrentUser]= useState(
        JSON.parse(localStorage.getItem('user'))|| null
        );

const login =async (inputs)=>{
    const res =await api.post('/users/login',inputs)
    const user =res.data.user
    const{password,...others} =user
    setCurrentUser(others)
  console.log(others)
}
const logout =async (inputs)=>{  
    const res =await api.post('/users/logout')
    setCurrentUser(null)
};
useEffect(()=>{
    localStorage.setItem("user",JSON.stringify(currentUser))
},[currentUser])
return <AuthContext.Provider value ={{currentUser,login,logout}}>
     {children}</AuthContext.Provider>
}; 