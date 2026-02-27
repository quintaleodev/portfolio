import projectData from "../../Data/projects.json";
import { ProjectsSection } from "./Projexts.styles.jsx";

export default function Projects() {

    return (
        <ProjectsSection>
            <div className="container">
                <div className="projects__content">
                    <h2 className="projects__content--title">Meus Projetos</h2>
                    <div className="cards__container">
                        <span>Confira alguns de meus trabalhos recentes:</span>
                        {projectData.projects.map((project, index) => (
                            <a className="card__container" 
                                key={index}
                                href={project.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <img className="card__image" 
                                    src={project.image} 
                                    alt={project.name}
                                />
                                <div className="card__info">
                                    <h3 className="card__info--title">{project.name}</h3>
                                    <p className="card__info--text">{project.description}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </ProjectsSection>
    );
};