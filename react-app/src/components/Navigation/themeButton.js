import React from "react"
import { useTheme } from "./darkMode"
import { DarkModeSwitch } from 'react-toggle-dark-mode'

function ThemeButton(){
    const { toggleTheme } = useTheme()
    return(
        // <button onClick={toggleTheme}>Test</button>
        <DarkModeSwitch
        checked
        >
        </DarkModeSwitch>
    )
}

export default ThemeButton
