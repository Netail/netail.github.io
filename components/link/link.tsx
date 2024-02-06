import type { FC } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import Typography from '../typography/typography';

import css from './link.module.scss';

interface LinkProps {
  label: string;
  href: string;
  target?: string;
}

const Link: FC<LinkProps> = ({ label, href, target = '_blank' }) => {
  return (
    <a href={href} target={target} rel='noreferrer' className={css.link}>
      <Typography variant='title'>{label}</Typography> <FiArrowUpRight />
    </a>
  );
};

export default Link;
