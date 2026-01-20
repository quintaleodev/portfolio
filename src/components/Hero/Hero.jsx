import heroavatar from "../../../assets/images/heroavatar.png"

export default function Hero() {

    return (
        <section>
            <div>
                <h1>
                    Olá, eu sou<br/>
                    <span>Leonardo Quintanilha.</span> 
                </h1>
                <p>
                    Desenvolvedor front-end com foco em React, criando sites modernos e responsivos. <br/>
                    Buscando aprender novas tecnologias e resolver problemas de código, a fim de criar experiências web incríveis.
                </p>
            </div>
            <img src={heroavatar} alt="Ilustração de um desenvolvedor trabalhando em um notebook" />
        </section>
    );
};
