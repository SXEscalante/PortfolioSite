import './AboutMePage.css'

import PortfolioImage from "../../Images/portfolioImage.png"

import { useContext } from "react";
import DarkModeContext from "../../Context/DarkmodeContext";

const AboutMePage = () => {
    const { darkMode } = useContext(DarkModeContext)
    
    return ( 
        <div className={`page aboutme-page ${darkMode ? 'dark-mode' : 'light-mode'}`}>
            <div className="background">
                <img className='self-image' src={PortfolioImage} alt="An image of myself" /> 
                <p>Ever since I was little, technology and learning about the world have always been passions of mine. After graduating high school, I looked at microbiology being my career path. Once the COVID pandemic hit and schooling moved online, I reevaluated if I wanted to take that path for my profession.</p>
                <p>I then had to take some time to focus on life over education, so I got a job in a King Soopers deli. I took the opportunity to learn a lot about the service industry and how to work well with a small team in a high-paced environment. During my time there, I learned many useful skills such as how to manage consistently shifting technologies used in the workplace and ways to manage my time to make sure schedules were met.</p>
                <p>While employed at Kroger, I began to dabble in code and programming, learning about boot camps as an effective tool to gain the necessary skills to begin ones career in the tech industry. After 3 years with Kroger, I was in a comfortable place to look to improve my field and left to take a course at devCodeCamp in software engineering. The course was incredibly informative, providing not only the tools to help me begin my journey as a developer but also the knowledge of how to use the available documentation to dive deeper into the technologies being used to gain greater insight into their functionality. I excelled in the course, consistently finishing projects early and being given bonus projects to work on which I used to push my growing skills. </p>
                <p>After finishing the course with over 107%, it is time to put the skills I have gained to the test in the wider world. Please reach out if you would like to get to know me more or believe I would make a good fit for your company.</p>
            </div>
            <div className='skill-container'>
                <h2>Skills</h2>
                <div className='skill-tag-container'>
                    <p className={`skill-tag ${darkMode ? 'light-mode' : 'dark-mode' }`}>JavaScript</p>
                    <p className={`skill-tag ${darkMode ? 'light-mode' : 'dark-mode' }`}>C#</p>
                    <p className={`skill-tag ${darkMode ? 'light-mode' : 'dark-mode' }`}>React</p>
                    <p className={`skill-tag ${darkMode ? 'light-mode' : 'dark-mode' }`}>HTML5</p>
                    <p className={`skill-tag ${darkMode ? 'light-mode' : 'dark-mode' }`}>CSS</p>
                    <p className={`skill-tag ${darkMode ? 'light-mode' : 'dark-mode' }`}>AWS</p>
                    <p className={`skill-tag ${darkMode ? 'light-mode' : 'dark-mode' }`}>GitHub</p>
                    <p className={`skill-tag ${darkMode ? 'light-mode' : 'dark-mode' }`}>SQL</p>
                    <p className={`skill-tag ${darkMode ? 'light-mode' : 'dark-mode' }`}>ASP.NET</p>
                    <p className={`skill-tag ${darkMode ? 'light-mode' : 'dark-mode' }`}>Web API</p>
                    <p className={`skill-tag ${darkMode ? 'light-mode' : 'dark-mode' }`}>Python</p>
                </div>
            </div>
       </div>
    );
}
 
export default AboutMePage;