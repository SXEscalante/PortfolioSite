import { useContext } from "react";
import DarkModeContext from "../../Context/DarkmodeContext";

import "./ContactPage.css"

const ContactPage = () => {
    const {darkMode} = useContext(DarkModeContext)
    
    return ( 
        <div className={`page contact-page ${darkMode ? 'dark-mode' : 'light-mode'}`}>
            <h1 className="contact-head">Reach Out!</h1>
            <h3>If you think I would be a good fit in your company, I'd love to hear from you!</h3>
            <div>
                <form className="email-form" action="">
                    <input className="email-input" type="text" placeholder="Email*"/>
                    <input className="company-input" type="text" placeholder="Company" />
                    <textarea className="email-message" placeholder="Message" rows={5} />
                </form>
            </div>
            <div className="contact-info">
                <p>SXEscalante@gmail.com</p>
                <p>{"(719) 888-0449"}</p>
                <p>6410 Black Ridge Vw, Apt 206, Colorado Springs, Colorado, 80924</p>
            </div>
        </div>
    );
}
 
export default ContactPage;