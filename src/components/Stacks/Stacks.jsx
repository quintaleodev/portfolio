import stackData from "../../Data/stack.json";
import { StackSection} from "./Stack.styles.jsx";

export default function Stack() {
  return (
    <StackSection>
      <div className="container">
        <div className="stack__content">
          <h2>Tecnologias</h2>

          {Object.entries(stackData).map(([category, items]) => (
            <div className="stack__group" key={category}>
              <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
              <ul>
                {items.map((tech) => (
                  <li key={tech.name}>
                    <img src={tech.logo} 
                          alt={`${tech.name} logo`} />
                    <span>{tech.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <a href="https://cursos.alura.com.br/user/baqleo/fullCertificate/3f4c8250db03b8e5eca27be709c4a121" 
              target="_blank" 
              rel="noopener noreferrer"
          >
            Certificado de cursos de front-end e outros diversos concluídos na plataforma Alura
          </a>
        </div>
      </div>
    </StackSection>
  );
}