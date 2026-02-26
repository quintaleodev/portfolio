import projectData from "../../Data/projects.json";
import { ProjectsSection } from "./Projexts.styles.jsx";

export default function Projects() {

    return (
        <ProjectsSection>
            <div className="Container">
                <div className="projects__content">
                    <h2>Projetos</h2>
                    <div className="cards__container">
                        {projectData.projects.map((project, index) => (
                            <a className="card" 
                                key={index}
                                href={project.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <img src={project.image} 
                                    alt={project.name}
                                />
                                <h2>{project.name}</h2>
                                <p>{project.description}</p>
                            </a>
                        )
                        )}
                    </div>
                </div>
            </div>
        </ProjectsSection>
    );
};