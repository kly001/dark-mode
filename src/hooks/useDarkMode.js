import React, {useEffect} from "react";
import useLocalStorage from "./useLocalStorage";

export const useDarkMode = ()=> {
  
    const [storedValue, setstoredValue] = useLocalStorage("darkMode")
    
    useEffect(() => {
        if (storedValue) {
           window.document.body.classList.add("dark-mode")
        } else {
            window.document.body.classList.remove("dark-mode")
        }

    }, [storedValue]);
    return [storedValue, setstoredValue]
}
