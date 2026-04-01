import contactData from "../../Data/contacts.json"; 
import { FooterSection } from "./Footer.styles"

import githubLogo from "../../assets/logos/github.svg";
import linkedinLogo from "../../assets/logos/linkedin.svg";

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
                                src={githubLogo} 
                                alt="Github logo" 
                            />
                        </a>
                        <a
                        href={contactData.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            <img className="contact__logo" 
                                src={linkedinLogo} 
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