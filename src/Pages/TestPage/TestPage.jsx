import lamp from '../../Images/lamp-head.png'

import { useState } from 'react'

import './TestPage.css'

const TestPage = ({}) => {

    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
    const [rotation, setRotation] = useState(0);

    const lightX = 115
    const lightY = 110

    window.addEventListener('mousemove', (event) => {
        let relMouseX = 0
        let relMouseY = 0
        let relRotation = 0

        relMouseX = (event.clientX - lightX)
        if(relMouseX <= 0){
            relMouseX = 0
        }
        setMouseX(relMouseX)


        relMouseY = (event.clientY - lightY)
        if(relMouseY <= 0){
            relMouseY = 0
        }
        setMouseY(relMouseY)

        let radians = Math.atan2(relMouseX - 0, relMouseY - 0)
        setRotation(((radians * (180 / Math.PI) * -1) + 60))
    })

    return ( 
        <div className="test-page">
            <img className='test-head' src={lamp} alt="" style={{transform: `rotate(${rotation}deg)`}}/>
            <p>{mouseX}</p>
            <p>{mouseY}</p>
            <p>{rotation}</p>
        </div>
    );
}
 
export default TestPage;