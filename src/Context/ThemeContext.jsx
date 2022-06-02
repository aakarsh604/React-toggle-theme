import React, {createContext} from "react"

export const ThemeContext = createContext();

//wrapper we need to wrap around the components
export const ThemeProvider = ({children}) => {

    const [theme, settheme] = React.useState("light");
    
    const toggletheme = () => {
        if ( theme === "light"){
            settheme("dark");
        } else {
            settheme("light")
        }
    }

    return <ThemeContext.Provider value={{
        theme,
        isLight : theme === "light",
        toggletheme
    }}>{children}</ThemeContext.Provider>
};