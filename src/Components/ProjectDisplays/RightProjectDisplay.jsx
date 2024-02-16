import "./ProjectDisplay.css"

const RightProjectDisplay = ({darkMode, imgPath, displayLabel}) => {
    return ( 
        <div className={`project-display ${darkMode ? 'dark-background' : 'light-background'}`}>
            <div className="default-display">                
                <h2 className="project-text">{displayLabel}</h2>
                <img className="display-image" src={imgPath} alt="" />
            </div>
        </div>
    );
}
 
export default RightProjectDisplay;