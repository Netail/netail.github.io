import classNames from 'clsx';
import type { FC, HTMLAttributes } from 'react';

import css from './container.module.scss';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

const Container: FC<ContainerProps> = ({ className, children, ...props }) => {
    const classes = classNames(css.container, className);

    return (
        <div className={classes} {...props}>
            {children}
        </div>
    );
};

export default Container;
