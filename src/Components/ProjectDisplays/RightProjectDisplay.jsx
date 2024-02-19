import "./ProjectDisplay.css"

const RightProjectDisplay = ({darkMode, imgPath, displayLabel, about}) => {
    return ( 
        <div className={`project-display ${darkMode ? 'dark-background' : 'light-background'}`}>
            <div className="default-display">                
                <h2 className="project-text">{displayLabel}</h2>
                <img className="display-image" src={imgPath} alt="" />
            </div>
            <div className="hover-display">
                <p>{about}</p>
            </div>
        </div>
    );
}
 
export default RightProjectDisplay;