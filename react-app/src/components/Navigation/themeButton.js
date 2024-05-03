import React from "react"
import { useTheme } from "./darkMode"

function ThemeButton() {
    const { theme, toggleTheme } = useTheme()
    return (
        <button onClick={toggleTheme}>{
            theme === 'light' ?
                <i class="fas fa-moon"></i> :
                <i class="far fa-lightbulb"></i>}
        </button>
    )
}

export default ThemeButton
