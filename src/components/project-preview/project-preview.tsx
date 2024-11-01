import { motion } from 'framer-motion';
import type { FC } from 'react';
import type { Project } from '../../interfaces/project';
import Link from '../link/link';
import Typography from '../typography/typography';

import css from './project-preview.module.scss';

interface ProjectProps {
    project: Project;
}

const ProjectPreview: FC<ProjectProps> = ({ project }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className={css.wrapper}
        >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                className={css.image}
                src={project.image}
                alt={`Project ${project.title}`}
            />
            {project.href ? (
                <Link href={project.href} label={project.title} />
            ) : (
                <Typography variant="title">{project.title}</Typography>
            )}
            <Typography variant="subtitle" sub>
                {project.description}
            </Typography>
        </motion.div>
    );
};

export default ProjectPreview;
