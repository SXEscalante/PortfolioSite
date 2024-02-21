import './Slide.css'

const Slide = ({index, darkMode, about, slidePosition, setSlidePostion}) => {
    if (index == 0){
        return(
            <div className={`slide ${darkMode ? 'dark-background' : 'light-background'}`}>
                <p className="description">{about}</p>
                <button className={`arrow ${darkMode ? 'right-light-arrow' : 'right-dark-arrow'}`} onClick={() => setSlidePostion(slidePosition++)}></button>
            </div>
        )
    } 
    else {
        return ( 
            <div className={`slide ${darkMode ? 'dark-background' : 'light-background'}`}>
                <p className="description">{index}</p>
                <div>
                    <button className={`arrow ${darkMode ? 'left-light-arrow' : 'left-dark-arrow'}`} onClick={() => setSlidePostion(slidePosition--)}></button>
                    <button className={`arrow ${darkMode ? 'right-light-arrow' : 'right-dark-arrow'}`}></button>
                </div>
            </div>
        );
    }
}
 
export default Slide;