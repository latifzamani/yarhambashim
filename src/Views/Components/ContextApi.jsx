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
    const [accessToken,setAccessToken]=useState(localStorage.getItem('SMSTOKEN'));

    const setToken=(token)=>{
        if(token){
            localStorage.setItem('SMSTOKEN',token);
        }else{
            localStorage.removeItem('SMSTOKEN');
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