import { useEffect, useState, useContext } from "react"

import "./HomePage.css"

import DarkModeContext from "../../Context/DarkmodeContext"

const HomePage = () => {
    const { darkMode } = useContext(DarkModeContext)

    return(
        <div className={`page ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        </div>
    )
}

export default HomePage