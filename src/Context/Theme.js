import { createContext,useContext } from "react";

//setting up initial values for user i.e light theme initial theme
export const ThemeContext = createContext({
    themeMode:"light",
    darkTheme: ()=>{},
    lightTheme:()=>{}
}) ; 

export const ThemeProvider = ThemeContext.Provider




export  const useTheme=()=>{
    return useContext(ThemeContext)
}