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

    return ( 
        <div className={`products-page ${darkMode ? 'dark-mode' : 'light-mode'}`}>
            <RightProjectDisplay darkMode={darkMode} imgPath={ViewDotaHomePage} displayLabel={"ViewDota"}/>
            <LeftProjectDisplay darkMode={darkMode}  imgPath={VolumeVisualizer} displayLabel={"Volume visualizer"}/>
            <RightProjectDisplay darkMode={darkMode} imgPath={ConsoleBattleship} displayLabel={"Console Battleship"}/>
        </div>
    );
}
 
export default ProjectsPage;