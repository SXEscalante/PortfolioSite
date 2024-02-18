import "./ContactPage.css"

import { useContext, useState } from "react";
import DarkModeContext from "../../Context/DarkmodeContext";
import emailjs from 'emailjs-com'

const ContactPage = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [company, setCompany] = useState('');
    const [message, setMessage] = useState('');

    const [emailSent, setEmailSent] = useState(false);

    const {darkMode} = useContext(DarkModeContext)

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_03idgf2', 'template_dynz3fp', e.target, 'Lak0-dZ_2dX1r6VPD')
        setEmailSent(true)
        resetInputs()
    }

    function resetInputs() {
        setFirstname('')
        setLastname('')
        setEmail('')
        setPhoneNumber('')
        setCompany('')
        setMessage('')
    }
    
    return ( 
        <div className={`page contact-page ${darkMode ? 'dark-mode' : 'light-mode'}`}>
            <h1 className="contact-head">Reach Out!</h1>
            <h3>If you think I would be a good fit for your company, I'd love to hear from you!</h3>
            <div className={`${emailSent ? 'hide-form' : "display-form"}`}>
                <form className="email-form" onSubmit={(e) => sendEmail(e)}>
                    <div>
                        <h3 className="input-label">Your Name</h3>
                        <div className="input-row">
                            <input className="input-box" type="text" placeholder="Firstname*" name="firstname" value={firstname || ''} onChange={(e) => setFirstname(e.target.value)} required/>
                            <input className="input-box" type="text" placeholder="Lastname*" name="lastname" value={lastname || ''} onChange={(e) => setLastname(e.target.value)} required/>
                        </div>
                    </div>
                    <div>
                        <h3 className="input-label">Your Contacts</h3>
                        <div className="input-row">
                            <input className="input-box" type="text" placeholder="Email*" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            <input className="input-box" type="text" placeholder="Phone #" name="phone-number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                        </div>
                    </div>
                    <div>
                        <h3 className="input-label">Company</h3>
                        <input className="company-input" type="text" name="company" placeholder="Company" value={company} onChange={(e) => setCompany(e.target.value)}/>
                    </div>
                    <textarea className="email-message" name="message" placeholder="Message" rows={7} value={message} onChange={(e) => setMessage(e.target.value)} required />
                    <button className="submit-button" type="submit">Send Email</button>
                </form>
            </div>
            <div className={`${emailSent ? 'post-submit-display' : 'hide-submit-display'}`}>
                <p>Your email has been sent, thank you for reaching out!</p>
                <p>I will be in contact with you soon</p>
                <button onClick={() => setEmailSent(false)}>OK</button>
            </div>
        </div>
    );
}
 
export default ContactPage;