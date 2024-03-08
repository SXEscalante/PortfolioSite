import pullcord from "../../Sounds/pullcord.wav"
import LampBase from '../../Images/lamp-base.png'
import LampHeadOff from '../../Images/lamp-head.png'
import LampHeadOn from '../../Images/lamp-head-on.png'

import "./Navbar.css"

import DarkModeContext from "../../Context/DarkmodeContext"
import { useNavigate, Link } from "react-router-dom";
import { useContext, useState } from "react";

const Navbar = () => {
    const { darkMode, setDarkMode } = useContext(DarkModeContext)
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
    const [rotation, setRotation] = useState(0);

    const lightX = 115
    const lightY = 110

    window.addEventListener('mousemove', (event) => {
        let relMouseX = 0
        let relMouseY = 0

        relMouseX = (event.clientX - lightX)
        if(relMouseX <= 0){
            relMouseX = 0
        }
        setMouseX(relMouseX)


        relMouseY = (event.clientY - lightY)
        if(relMouseY <= 0){
            relMouseY = 0
        }
        setMouseY(relMouseY)

        let radians = Math.atan2(relMouseX - 0, relMouseY - 0)
        setRotation(((radians * (180 / Math.PI) * -1) + 60))
    })

    const clickCord = () => {
        new Audio(pullcord).play()
        setDarkMode(!darkMode)
    }

    return(
        <nav>
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
            <div>
                <img className='lamp-head' src={darkMode ? LampHeadOff : LampHeadOn} alt="" style={{transform: `rotate(${rotation}deg)`}}/>
                <img className="lamp-base" src={LampBase} alt="" />
                <button className="dark-mode-button" onClick={() => (clickCord())}></button>
            </div>
        </nav>
    )
}

export default Navbar