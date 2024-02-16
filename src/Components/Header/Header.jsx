import "./Header.css"

import pullcord from "../../Sounds/pullcord.wav"

import DarkModeContext from "../../Context/DarkmodeContext"

import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";

const Header = () => {
    const { darkMode, setDarkMode } = useContext(DarkModeContext)

    const clickCord = () => {
        new Audio(pullcord).play()
        setDarkMode(!darkMode)
    }

    return(
        <div>
            <div className="page-header">
                    <Link to="/" style={{textDecoration: "none"}}>
                        <div className="logo">
                                <span className="logo-letters">S</span><span className="small-logo-letters">x</span><span className="logo-letters">E</span>
                        </div>
                    </Link>
                <div className="links">
                    <a className="header-link" href="/projects">Projects</a>
                    <a className="header-link" href="/about-me">About Me</a>
                    <a className="header-link" href="/contacts">Contact</a>
                </div>
            </div>
            <button className="dark-mode-button" onClick={() => (clickCord())}></button>
        </div>
    )
}

export default Header