import RightProjectDisplay from "../../Components/ProjectDisplays/RightProjectDisplay";
import LeftProjectDisplay from "../../Components/ProjectDisplays/LeftProjectDisplay";

import "./ProjectsPage.css"

import ViewDotaHomePage from "../../Images/ViewDotaHomepage.png"
import ConsoleBattleship from "../../Images/ConsoleBattleship.png"
import VolumeVisualizer from "../../Images/VolumeVisualizer.png"

import { useContext } from "react";
import DarkModeContext from "../../Context/DarkmodeContext";

const ProjectsPage = () => {
    const { darkMode } = useContext(DarkModeContext)

    const aboutViewDota = 'An application that allow players of the game DOTA 2 to login with their Steam Id to see the statistics of the games they have played.'
    const aboutVolumeVisualizer = 'Do you know what 50000 mililiters of water would look like? Not many people are able to easily visualize a volume just by the metric, so this application converts it into a form that is much easier to understand as well as displaying what it would actually look like!'
    const aboutConsoleBattleship = 'Programming games can be a great way to learn new technologies and push your abilites. I developed this console game as a test of my abilities in C# and to teach myself how to use arrow keys to control a program.'

    const viewDotaSlides = {
        count: 3, 
        about: aboutViewDota, 
        slideText: ['something', 'another thing']
    }

    const volumeVisualizerSlides = {
        count: 3, 
        about: aboutViewDota, 
        slideText: ['something', 'another thing']
    }

    const consoleBattleshipSlides = {
        count: 3, 
        about: aboutConsoleBattleship, 
        slideText: ['something', 'another thing']
    }

    return ( 
        <div className={`projects-page ${darkMode ? 'dark-mode' : 'light-mode'}`}>
            <div className="projects-container" >
                <RightProjectDisplay darkMode={darkMode} imgPath={ViewDotaHomePage} displayLabel={"ViewDota"} about={aboutViewDota} slides={viewDotaSlides}/>
                <LeftProjectDisplay darkMode={darkMode}  imgPath={VolumeVisualizer} displayLabel={"Volume visualizer"} about={aboutVolumeVisualizer} slides={volumeVisualizerSlides}/>
                <RightProjectDisplay darkMode={darkMode} imgPath={ConsoleBattleship} displayLabel={"Console Battleship"} about={aboutConsoleBattleship} slides={consoleBattleshipSlides}/>
            </div>
        </div>
    );
}
 
export default ProjectsPage;