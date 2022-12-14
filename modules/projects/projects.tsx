import { FC } from 'react';
import Column from '../../components/column/column';
import ProjectPreview from '../../components/project-preview/project-preview';
import Row from '../../components/row/row';
import { Project } from '../../interfaces/project';

interface ProjectsProps { 
    projects: Project[];
}

const Projects: FC<ProjectsProps> = ({ projects }) => {
    return (
        <Row spacingColumn={2} spacingRow={4}>
            {projects.map((project, index) => (
                <Column size={{ xs: 12, lg: 6 }} key={index}>
                    <ProjectPreview project={project} />
                </Column>
            ))}
        </Row>
    );
}

export default Projects;