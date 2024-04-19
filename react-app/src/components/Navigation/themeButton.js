import React from "react"
import { useTheme } from "./darkMode"
import Cookies from "js-cookie"

function ThemeButton(){
    const { toggleTheme } = useTheme()
    const theme = Cookies.get("theme")
    return(
        <button onClick={toggleTheme}>{theme === 'light' ? "dark" : "light"}</button>
    )
}

export default ThemeButton
