import { useEffect, useState } from "react"
import "./HomePage.css"

const HomePage = ({darkMode}) => {
    return(
        <div className={`page ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        </div>
    )
}

export default HomePage