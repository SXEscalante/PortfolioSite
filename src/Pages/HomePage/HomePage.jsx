import "./HomePage.css"

import { useContext } from "react"
import DarkModeContext from "../../Context/DarkmodeContext"

const HomePage = () => {
    const { darkMode } = useContext(DarkModeContext)

    return(
        <div className={`page ${darkMode ? 'dark-mode' : 'light-mode'}`}>
            <div className="home-text">
                <h1 className="name">Sebastian X Escalante</h1>
                <h2 className="title">Full Stack Developer</h2>
                <div className="homepage-discription">
                    <p>Hello and welcome to my portfolio. I am a recent graduate of devCodeCamp based in Colorado that is looking to get into the software engineering industry.</p>
                    <p>I love pushing the limits of what I can acheive in my applications and learning new technologies to further enhance my programming abilities!</p>
                </div>
            </div>
        </div>
    )
}

export default HomePage