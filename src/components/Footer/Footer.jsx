import contactData from "../../Data/contacts.json"; 
import { FooterSection } from "./Footer.styles"

export default function Footer(){
    return (
        <FooterSection>
            <div className="container">
                <div className="footer__content">
                    <p className="footer__text">
                        {contactData.role}
                    </p>
                    <div className="footer__links">
                        <a
                        href={contactData.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            <img className="contact__logo" 
                                src="src/assets/logos/github.svg" 
                                alt="Github logo" 
                            />
                        </a>
                        <a
                        href={contactData.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            <img className="contact__logo" 
                                src="src/assets/logos/linkedin.svg" 
                                alt="linkedin logo" 
                            />
                        </a>
                    </div>
                        <a href={`mailto:${contactData.email}`}>
                            {contactData.email}
                        </a>        
                    <p className="footer__copy">
                        {contactData.name} - {contactData.location} - {new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </FooterSection>
    )
}