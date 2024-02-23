import ProjectDisplay from "../../Components/ProjectDisplays/ProjectDisplay";

import "./ProjectsPage.css"

import ViewDotaHomePage from "../../Images/ViewDotaHomepage.png"
import ViewDotaAccountPage from "../../Images/ViewDotaAccountPage.png"
import ViewDotaMatchHistoryPage from "../../Images/ViewDotaMatchHistoryPage.png"
import ViewDotaMatchDetailsPage from "../../Images/ViewDotaMatchDetailsPage.png"
import VolumeVisualizer from "../../Images/VolumeVisualizer.png"
import VolumeVisualizerDefault from "../../Images/VolumeVisualizerDefault.png"
import VolumeVisualizerSetOutcome from "../../Images/VolumeVisualizerSetOutput.png"
import ConsoleBattleship from "../../Images/ConsoleBattleship.png"
import ConsoleBattleshipPlacement from '../../Images/ConsoleBattleshipPlacement.png'

import { useContext } from "react";
import DarkModeContext from "../../Context/DarkmodeContext";

const ProjectsPage = () => {
    const { darkMode } = useContext(DarkModeContext)

    const aboutViewDota = 'An application that allow players of the game DOTA 2 to login with their Steam Id to see the statistics of the games they have played.'
    const viewDotaSlide1 = 'Users account page where they are able to see the statistics from the games played within the selected time frame.'
    const viewDotaSlide2 = 'The history of up to 100 previously played matches that can be sorted by each statistic. Each match can be selected to see more information.'
    const viewDotaSlide3 = 'A more detailed look at an individual match, including the stats of any party members in the match. Comments are able to be left on the match that party members are also able to see.'
    const aboutVolumeVisualizer = 'Do you know what 50000 mililiters of water would look like? Not many people are able to easily visualize a volume just by the metric, so this application converts it into a form that is much easier to understand as well as displaying what it would actually look like!'
    const volumeVisualizerSlide1 = 'The application by default will choose the closest reference container for the visualization'
    const volumeVisualizerSlide2 = 'The user is also able to select a reference to that they are most familiar with, even if the object count gets very large'
    const aboutConsoleBattleship = 'Programming games can be a great way to learn new technologies and push your abilites. I developed this console game as a test of my abilities in C# and to teach myself how to use arrow keys to control a program.'
    const consoleBattleshipSlide1 = 'At the beginning of the game players take turns placing their ships on the board'

    const viewDotaSlides = {
        count: 4, 
        slideText: [aboutViewDota, viewDotaSlide1, viewDotaSlide2, viewDotaSlide3],
        slideImages: [null, ViewDotaAccountPage, ViewDotaMatchHistoryPage, ViewDotaMatchDetailsPage]
    }

    const volumeVisualizerSlides = {
        count: 3, 
        slideText: [aboutVolumeVisualizer, volumeVisualizerSlide1, volumeVisualizerSlide2], 
        slideImages: [null, VolumeVisualizerDefault, VolumeVisualizerSetOutcome]
    }


    const consoleBattleshipSlides = {
        count: 2, 
        slideText: [aboutConsoleBattleship, consoleBattleshipSlide1], 
        slideImages: [null, ConsoleBattleshipPlacement]
    }

    return ( 
        <div className={`projects-page ${darkMode ? 'dark-mode' : 'light-mode'}`}>
            <div className="projects-container" >
                <ProjectDisplay darkMode={darkMode} imgPath={ViewDotaHomePage} displayLabel={"ViewDota"} about={aboutViewDota} slides={viewDotaSlides} direction={'right'}/>
                <ProjectDisplay darkMode={darkMode}  imgPath={VolumeVisualizer} displayLabel={"Volume visualizer"} about={aboutVolumeVisualizer} slides={volumeVisualizerSlides} direction={'left'}/>
                <ProjectDisplay darkMode={darkMode} imgPath={ConsoleBattleship} displayLabel={"Console Battleship"} about={aboutConsoleBattleship} slides={consoleBattleshipSlides} direction={'right'}/>
            </div>
        </div>
    );
}
 
export default ProjectsPage;