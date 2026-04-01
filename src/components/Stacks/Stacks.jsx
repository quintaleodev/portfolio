import stackData from "../../Data/stack.json";
import { StackSection} from "./Stack.styles.jsx";

import html5 from "../../assets/logos/html5.svg";
import css3 from "../../assets/logos/css3.svg";
import javascript from "../../assets/logos/javascript.svg";
import react from "../../assets/logos/react.svg";
import git from "../../assets/logos/git.svg";
import vite from "../../assets/logos/vite.svg";
import figma from "../../assets/logos/figma.svg";

const logos = {
  html5,
  css3,
  javascript,
  react,
  git,
  vite,
  figma,
};

export default function Stack() {
  console.log(logos);
  return (
    <StackSection>
      <div className="container">
        <div className="stack__content">
          <h2 className="stack__content--title">Tecnologias</h2>
          <div className="stack__content--content">
            {Object.entries(stackData).map(([category, items]) => (
              <div className="stack__group" key={category}>
                <h3 className="stack__category">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                <ul className="stack__category--list">
                  {items.map((tech) => (
                    <li className="tech" key={tech.name}>
                      <img className="tech--logo" src={logos[tech.logo]} 
                            alt={`${tech.name} logo`} 
                      />
                      <span className="tech--name">{tech.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
            <a href="https://cursos.alura.com.br/user/baqleo/fullCertificate/3f4c8250db03b8e5eca27be709c4a121" 
                target="_blank" 
                rel="noopener noreferrer"
            >
              Certificados de cursos de front-end e outros diversos concluídos na plataforma Alura - clique para visualizar
            </a>
        </div>
      </div>
    </StackSection>
  );
}