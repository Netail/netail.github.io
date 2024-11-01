import classnames from 'clsx';
import type { FC, HTMLAttributes } from 'react';

import css from './column.module.scss';

type Size = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface ResponsiveSize {
    xs?: Size;
    sm?: Size;
    md?: Size;
    lg?: Size;
    xl?: Size;
}

interface ColumnProps extends HTMLAttributes<HTMLElement> {
    size?: ResponsiveSize;
}

const Column: FC<ColumnProps> = ({ children, className, size, ...props }) => {
    const classes = classnames(
        css.column,

        css[`xs-${size?.xs ?? 12}`],
        size?.sm && css[`sm-${size.sm}`],
        size?.md && css[`md-${size.md}`],
        size?.lg && css[`lg-${size.lg}`],
        size?.xl && css[`xl-${size.xl}`],

        className,
    );

    return (
        <div className={classes} {...props}>
            {children}
        </div>
    );
};

export default Column;
