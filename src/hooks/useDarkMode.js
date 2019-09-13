import  {useEffect} from "react";
import useLocalStorage from "./useLocalStorage";

export const useDarkMode = ()=> {
  
    const [storedValue, setstoredValue] = useLocalStorage("darkMode")

    // check to see if the value from `useLocalStorage` is true or false.
    useEffect(() => {
    //If it's true, add the class `dark-mode` to the `body` element.
        if (storedValue) {
           document.body.classList.add("dark-mode")
    //If it's false, remove the class from the `body` element. 
        } else {
            document.body.classList.remove("dark-mode")
        }

    }, [storedValue]);
    //return something out of here so we can use this in our app
    return [storedValue, setstoredValue]
}

// Resources:

// 1. https://davidwalsh.name/classlist
// 2. gregnb/react-to-print(GitHub)
// 3. https://www.w3schools.com/jsref/prop_element_classlist.asp
// 4. https://alligator.io/js/classlist/

