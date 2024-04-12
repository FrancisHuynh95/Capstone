import React from "react"
import { useTheme } from "./darkMode"

function ThemeButton(){
    const { toggleTheme } = useTheme()
    return(
        <button onClick={toggleTheme}>Test</button>
    )
}

export default ThemeButton
