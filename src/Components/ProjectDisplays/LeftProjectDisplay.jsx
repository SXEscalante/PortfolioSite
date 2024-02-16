import ViewDotaHomePage from "../../Images/ViewDotaHomepage.png"
import "./ProjectDisplay.css"

const LeftProjectDisplay = ({darkMode, imgPath, displayLabel}) => {
    return ( 
        <div className={`project-display ${darkMode ? 'dark-background' : 'light-background'}`}>
            <div className="default-display">
                <img className="display-image" src={imgPath} alt="" />
                <h2 className="project-text">{displayLabel}</h2>
            </div>
        </div>
    );
}
 
export default LeftProjectDisplay;