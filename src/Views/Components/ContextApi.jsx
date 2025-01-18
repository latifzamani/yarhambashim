import { createContext, useContext, useState } from "react";
import { Navigate } from "react-router-dom";



//createContext
const mainContext=createContext({
    currentUser:{},
    setCurrentUser:()=>{},
    accessToken:null,
    setToken:()=>{},
});

export default function ContextApi({children}){
    const [currentUser,setCurrentUser]=useState({});
    const [accessToken,setAccessToken]=useState(localStorage.getItem('YHTOKEN'));

    const setToken=(token)=>{
        if(token){
            localStorage.setItem('YHTOKEN',token);
        }else{
            localStorage.removeItem('YHTOKEN');
            Navigate('/login');
        };
        setAccessToken(token);
    }

    return(
        <>
            {/* ContextProvider */}
            <mainContext.Provider value={{
                currentUser,setCurrentUser,accessToken,setToken
            }}>
                {children}
            </mainContext.Provider>
        </>
    );

}
   
export function useMainContext(){
        return useContext(mainContext);
    }