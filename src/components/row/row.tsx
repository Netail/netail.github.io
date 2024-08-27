import type { FC, HTMLAttributes } from 'react';
import classNames from 'clsx';

import css from './row.module.scss';

type Direction = 'row' | 'column';

type Spacing = 0 | 1 | 2 | 4 | 8 | 16;

interface RowProps extends HTMLAttributes<HTMLDivElement> {
    direction?: Direction;
    spacingRow?: Spacing;
    spacingColumn?: Spacing;
}

const Row: FC<RowProps> = ({
    direction = 'row',
    spacingRow = 1,
    spacingColumn = 1,
    className,
    children,
    ...props
}) => {
    const classes = classNames(
        css.row,
        css[`direction-${direction}`],
        spacingRow > 0 && css[`spacing-row-${spacingRow}`],
        spacingColumn > 0 && css[`spacing-column-${spacingColumn}`],
        className
    );

    return (
        <div className={classes} {...props}>
            {children}
        </div>
    );
};

export default Row;
