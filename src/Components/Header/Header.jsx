import "./Header.css"

import pullcord from "../../Sounds/pullcord.wav"

import { useNavigate, Link } from "react-router-dom";

const Header = ({setDarkMode, darkMode}) => {

    const clickCord = () => {
        new Audio(pullcord).play()
        setDarkMode(!darkMode)
    }

    return(
        <div className="page-header">
            <button className="dark-mode-button" onClick={() => (clickCord())}></button>
                <Link to="/" style={{textDecoration: "none"}}>
                    <div className="logo">
                            <span className="logo-letters">S</span><span className="small-logo-letters">x</span><span className="logo-letters">E</span>
                    </div>
                </Link>
            <div className="links">
                <a className="header-link" href="/projects">Projects</a>
                <a className="header-link" href="/aboutMe">About Me</a>
                <a className="header-link" href="/contacts">Contact</a>
            </div>
        </div>
    )
}

export default Header