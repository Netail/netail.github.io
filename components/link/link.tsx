import { FC } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import Typography from '../typography/typography';

import css from './link.module.scss';

interface LinkProps { 
    label: string;
    href: string;
}

const Link: FC<LinkProps> = ({ label, href }) => {
    return (
        <a href={href} target='_blank' rel='noreferrer' className={css.link}>
            <Typography variant='title'>{label}</Typography> <FiArrowUpRight />
        </a> 
    );
}

export default Link;