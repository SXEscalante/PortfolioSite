import './Slide.css'

const Slide = ({index, darkMode, about, setSlidePostion, lastSlide}) => {
    const nextSlide = () => {
        setSlidePostion(prevSlide => prevSlide + 1)
    }

    const prevSlide = () => {
        setSlidePostion(prevSlide => prevSlide - 1)
    }

    if (index == 0){
        return(
            <div className={`slide ${darkMode ? 'dark-background' : 'light-background'}`}>
                <p className="description">{about}</p>
                <button className={`arrow ${darkMode ? 'right-light-arrow' : 'right-dark-arrow'}`} onClick={() => nextSlide()}></button>
            </div>
        )
    } 
    else if (lastSlide === true){
        return(
            <div className={`slide ${darkMode ? 'dark-background' : 'light-background'}`}>
                <p className="description">{index}</p>
                <button className={`arrow ${darkMode ? 'left-light-arrow' : 'left-dark-arrow'}`} onClick={() => prevSlide()}></button>
            </div>
        )
    }
    else {
        return ( 
            <div className={`slide ${darkMode ? 'dark-background' : 'light-background'}`}>
                <p className="description">{index}</p>
                <div>
                    <button className={`arrow ${darkMode ? 'left-light-arrow' : 'left-dark-arrow'}`} onClick={() => prevSlide()}></button>
                    <button className={`arrow ${darkMode ? 'right-light-arrow' : 'right-dark-arrow'}` } onClick={() => nextSlide()}></button>
                </div>
            </div>
        );
    }
}
 
export default Slide;