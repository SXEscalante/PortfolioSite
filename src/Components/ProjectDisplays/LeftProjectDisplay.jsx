import "./ProjectDisplay.css"

import { useState } from "react";

const LeftProjectDisplay = ({darkMode, imgPath, displayLabel, about, slides}) => {
    const [slide, setSlide] = useState(0);

    function createSlides() {
        
    }
    
    return ( 
        <div className={`project-display ${darkMode ? 'dark-background' : 'light-background'}`}>
            <div className="default-display">                
                <img className="display-image" src={imgPath} alt="" />
                <h2 className="project-text">{displayLabel}</h2>
            </div>
            <div className={`hover-display ${darkMode ? 'dark-background' : 'light-background'}`}>
                <div className="slide">
                    <p className="description">{about}</p>
                    <button className={`arrow ${darkMode ? 'right-light-arrow' : 'right-dark-arrow'}`}></button>
                </div>
            </div>
        </div>
    );
}
 
export default LeftProjectDisplay;