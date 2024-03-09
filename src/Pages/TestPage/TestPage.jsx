import React, { useContext, useEffect, useRef } from 'react'
import { Engine, Render, Bodies, World } from 'matter-js';
import DarkModeContext from "../../Context/DarkmodeContext"

import './TestPage.css'

const TestPage = ({}) => {
    const { darkMode } = useContext(DarkModeContext)
    const scene = useRef();
    const engine = useRef(Engine.create());
    const isPressed = useRef(false);

    useEffect(() => {
        const cw = document.body.clientWidth;
        const ch = document.body.clientHeight;
    
        const render = Render.create({
          element: scene.current,
          engine: engine.current,
          options: {
            width: cw,
            height: ch,
            wireframes: false,
            background: darkMode ? '#000' : '#fff' // Adjust background based on dark mode
          }
        });
    
        World.add(engine.current.world, [
          Bodies.rectangle(cw / 2, -10, cw, 20, { isStatic: true }),
          Bodies.rectangle(-10, ch / 2, 20, ch, { isStatic: true }),
          Bodies.rectangle(cw / 2, ch + 10, cw, 20, { isStatic: true }),
          Bodies.rectangle(cw + 10, ch / 2, 20, ch, { isStatic: true })
        ]);
    
        Engine.run(engine.current);
        Render.run(render);
    
        return () => {
          Render.stop(render);
          World.clear(engine.current.world);
          Engine.clear(engine.current);
          render.canvas.remove();
          render.canvas = null;
          render.context = null;
          render.textures = {};
        };
     }, [darkMode]);
    
     const handleDown = () => {
        isPressed.current = true;
     };
    
     const handleUp = () => {
        isPressed.current = false;
     };
    
     const handleAddCircle = e => {
        if (isPressed.current) {
          const ball = Bodies.circle(
            e.clientX,
            e.clientY,
            10 + Math.random() * 30,
            {
              mass: 10,
              restitution: 0.9,
              friction: 0.005,
              render: {
                fillStyle: '#0000ff'
              }
            }
          );
          World.add(engine.current.world, [ball]);
        }
     };

    return ( 
        <div className={`page ${darkMode ? 'dark-mode' : 'light-mode'}`} onMouseDown={handleDown} onMouseUp={handleUp} onMouseMove={handleAddCircle} >
            <div ref={scene} style={{ width: '100%', height: '100%' }} />
        </div>
    );
}
 
export default TestPage;