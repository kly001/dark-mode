import React from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = (key, initialValue)=> {
    console.log(key)
    const [storedMode, setStoredMode] = useLocalStorage("darkMode")
    return (
     
        <p>This is Darkmode component</p>
    )
}
export default useDarkMode