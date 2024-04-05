import React, {useContext, useState} from 'react'
import Cookie from 'js-cookie'

function DarkMode({dark, darkStatus}){
    function onClick(){
        dark(!darkStatus)
    }
    return (
        <button onClick={() => onClick()}>
            {darkStatus ? "Light" : "Dark"}
        </button>
    )
}
const ThemeContext = React.createContext()

export function ThemeProvider( {children} ){
    let theme = Cookie.get("theme")
    if(theme === undefined) Cookie.set("theme",'false')
    const [dark, setDark ] = useState(dark)

    function toggleDark(){
        setDark(dark => !dark)
    }

    return (
        <ThemeContext.Provider value={dark}>
            <children></children>
        </ThemeContext.Provider>
    )
}

export default DarkMode
