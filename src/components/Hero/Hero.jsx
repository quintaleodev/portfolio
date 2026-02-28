import heroavatar from "../../assets/images/heroavatar.png"
import { HeroSection } from "./Hero.styles.jsx";


export default function Hero() {

    return (
        <HeroSection>
            <div className="container">
                <div className="hero__content">
                    <div className="text__content">
                        <h1>
                            Olá, eu sou <br />
                            <strong>Leonardo Quintanilha.</strong>
                        </h1>

                        <div className="text__content--text">
                            <p>
                                Desenvolvedor front-end com foco em React, criando sites modernos e
                                responsivos. 
                            </p>
                            <p>
                                Buscando aprender novas tecnologias e resolver problemas de código,
                                a fim de criar experiências web incríveis.
                            </p>
                        </div>
                    </div>
                    <div className="image__content">
                        <img
                            src={heroavatar}
                            alt="Ilustração de um desenvolvedor trabalhando em um notebook"
                        />
                    </div>
                </div>
            </div>
        </HeroSection>
    );
};
