import './Slide.css'

import image from '../../Images/ViewDotaHomepage.png'

const Slide = ({index, darkMode, text, setSlidePostion, lastSlide, imgPath}) => {
    console.log(index, text)
    const nextSlide = () => {
        setSlidePostion(prevSlide => prevSlide + 1)
    }

    const prevSlide = () => {
        setSlidePostion(prevSlide => prevSlide - 1)
    }

    if (index == 0){
        return(
            <div className={`slide ${darkMode ? 'dark-background' : 'light-background'}`}>
                <p className="description">{text}</p>
                <button className={`arrow ${darkMode ? 'right-light-arrow' : 'right-dark-arrow'}`} onClick={() => nextSlide()}></button>
            </div>
        )
    } 
    else if (lastSlide === true){
        return(
            <div className={`slide ${darkMode ? 'dark-background' : 'light-background'}`}>
                {imgPath &&
                    <img className='slide-image' src={imgPath} alt="" />}
                <p className="slide-text">{text}</p>
                <button className={`arrow ${darkMode ? 'left-light-arrow' : 'left-dark-arrow'}`} onClick={() => prevSlide()}></button>
            </div>
        )
    }
    else {
        return ( 
            <div className={`slide ${darkMode ? 'dark-background' : 'light-background'}`}>
                <div>
                    {imgPath &&
                        <img className='slide-image' src={imgPath} alt="" />}
                    <p className="slide-text">{text}</p>
                    <div className='slide-button-container'>
                        <button className={`arrow ${darkMode ? 'left-light-arrow' : 'left-dark-arrow'}`} onClick={() => prevSlide()}></button>
                        <button className={`arrow ${darkMode ? 'right-light-arrow' : 'right-dark-arrow'}` } onClick={() => nextSlide()}></button>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Slide;