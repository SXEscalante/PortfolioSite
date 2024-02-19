import ViewDotaHomePage from "../../Images/ViewDotaHomepage.png"
import "./ProjectDisplay.css"

const LeftProjectDisplay = ({darkMode, imgPath, displayLabel, about}) => {
    return ( 
        <div className={`project-display ${darkMode ? 'dark-background' : 'light-background'}`}>
            <div className="default-display">
                <img className="display-image" src={imgPath} alt="" />
                <h2 className="project-text">{displayLabel}</h2>
            </div>
            <div className="hover-display">
                <p>{about}</p>
            </div>
        </div>
    );
}
 
export default LeftProjectDisplay;