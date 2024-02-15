import "./Header.css"
import pullcord from "../../Sounds/pullcord.wav"

const Header = ({setDarkMode, darkMode}) => {

    const clickCord = () => {
        new Audio(pullcord).play()
        setDarkMode(!darkMode)
    }

    return(
        <div className="page-header">
            <button className="dark-mode-button" onClick={() => (clickCord())}></button>
            <div className="logo">
                <span className="logo-letters">S</span><span className="small-logo-letters">x</span><span className="logo-letters">E</span>
            </div>

        </div>
    )
}

export default Header