import "./Footer.css"

const Footer = ({}) => {
    return ( 
        <footer className="footer">
            <a className="social-button GitHub" href="https://github.com/SXEscalante" target="_blank"></a>
            <div className="contacts">
                <h3 className="contacts-head">Contacts</h3>
                <div className="contact-info">
                    <p>SXEscalante@gmail.com</p>
                    <p>{"(719) 888-0449"}</p>
                    <p>Colorado Springs, Colorado</p>
                </div>
            </div>
            <a className="social-button LinkedIn" href="https://www.linkedin.com/in/sxescalante/" target="_blank"></a>
        </footer>
    );
}
 
export default Footer;