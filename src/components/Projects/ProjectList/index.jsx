import { projects } from "../../../data/projects"; 
import { ProjectCard } from "./ProjectCard/ProjectCard";
import styles from "./style.module.css";

export const ProjectsList = () => {
    return (
        <div>
            <ul className={styles.listProjects}>
                {projects.map(project => (
                    <ProjectCard key={project.name}>                        
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>                        
                    </ProjectCard>
                ))}
            </ul>
        </div>
    );
};
