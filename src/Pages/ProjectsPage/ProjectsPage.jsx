import { useContext } from "react";
import DarkModeContext from "../../Context/DarkmodeContext";

const ProjectsPage = () => {
    const { darkMode } = useContext(DarkModeContext)

    return ( 
        <div className={`page ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        </div>
    );
}
 
export default ProjectsPage;