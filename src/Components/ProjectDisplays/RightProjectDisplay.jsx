import Slide from "../Slide/Slide";

import "./ProjectDisplay.css"

import { useEffect, useState } from "react";



const RightProjectDisplay = ({darkMode, imgPath, displayLabel, slides}) => {
    const [slide, setSlide] = useState(0);
    const [slideObjs, setSlideObjs] = useState([]);
    const [translatePercent, setTranslatePercent] = useState('');

    function createSlides() {
        let newSlideObjs = []
        for(let i = 0; i < slides.count; i++){
            let lastSlide = false
            if (i == slides.count - 1){
                lastSlide = true
            }
            newSlideObjs.push(<Slide index={i} darkMode={darkMode} about={slides.about} slidePosition={slide} setSlidePostion={setSlide} lastSlide={lastSlide}/>)
        }
        setSlideObjs(newSlideObjs)
    }

    useEffect(() => {
        createSlides()
    }, []);

    
    useEffect(() => {
        console.log('slides', slide)
        let translate = `translateX(-${slide}00%)`
        setTranslatePercent(translate)
    }, [slide]);

    return ( 
        <div className={`project-display ${darkMode ? 'dark-background' : 'light-background'}`}>
            <div className="default-display">                
                <h2 className="project-text">{displayLabel}</h2>
                <img className="display-image" src={imgPath} alt="" />
            </div>
            <div className={`hover-display ${darkMode ? 'dark-background' : 'light-background'}`}>
                <div className="slide-container" style={{transform: translatePercent, transition: 'transform 0.5s ease'}}>
                  {slideObjs}
                </div>
            </div>
        </div>
    );
}
 
export default RightProjectDisplay;