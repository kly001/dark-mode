import {useState} from "react";

const useLocalStorage = (key, initialValue) => {

    // Define state - initial value set to local storage property
    const item = JSON.parse(localStorage.getItem(key))
    const [storedValue, setStoredValue]= useState(item || initialValue);
   
    // Define a setter function that sets a value to local storage when called
    // and also set state property to the new value.
    const setValue = value => {
        window.localStorage.setItem(key,JSON.stringify(value))
        setStoredValue(value)
    }
return [storedValue, setValue];
}

export default useLocalStorage