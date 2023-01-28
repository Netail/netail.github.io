import type { FC } from 'react';
import type { Project } from '../../interfaces/project';
import Typography from '../typography/typography';

import css from './project-preview.module.scss';

interface ProjectProps {
    project: Project;
}

const ProjectPreview: FC<ProjectProps> = ({ project }) => {
    return (
        <div className={css.wrapper}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                className={css.image}
                src={project.image}
                alt='Project image'
            />
            <Typography variant='title'>{project.title}</Typography>
            <Typography variant='subtitle' sub>
                {project.description}
            </Typography>
        </div>
    );
};

export default ProjectPreview;
