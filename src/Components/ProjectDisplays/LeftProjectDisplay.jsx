import ViewDotaHomePage from "../../Images/ViewDotaHomepage.png"
import "./ProjectDisplay.css"

const LeftProjectDisplay = ({darkMode, imgPath, displayLabel}) => {
    return ( 
        <div className={`project-display ${darkMode ? 'dark-background' : 'light-background'}`}>
            <div className="default-display">
                <img className="display-image" src={imgPath} alt="" />
                <h2 className="project-text">{displayLabel}</h2>
            </div>
            <div className="hover-display">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam incidunt ipsa esse illum ad veritatis laudantium corporis mollitia atque quae accusantium, deleniti eius expedita corrupti illo inventore repudiandae. Provident, totam?</p>
            </div>
        </div>
    );
}
 
export default LeftProjectDisplay;