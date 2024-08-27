import type { FC, HTMLAttributes, ReactHTML } from 'react';
import classNames from 'clsx';

import css from './typography.module.scss';

type Variant =
    | 'heading1'
    | 'heading2'
    | 'heading3'
    | 'title'
    | 'subtitle'
    | 'body1'
    | 'body2';

type Align = 'left' | 'center' | 'right';

const VariantTags: { [key in Variant]: keyof ReactHTML } = {
    heading1: 'h1',
    heading2: 'h2',
    heading3: 'h3',
    title: 'h4',
    subtitle: 'h5',
    body1: 'p',
    body2: 'p',
};

interface TypographyProps extends HTMLAttributes<HTMLElement> {
    variant?: Variant;
    align?: Align;
    sub?: boolean;
    as?: keyof ReactHTML;
}

const Typography: FC<TypographyProps> = ({
    variant = 'body1',
    align = 'left',
    sub = false,
    as: Tag = VariantTags[variant],
    className,
    children,
    ...props
}) => {
    const classes = classNames(
        css.typography,
        css[variant],
        css[`align-${align}`],
        sub && css.sub,
        className
    );

    return (
        <Tag className={classes} {...props}>
            {children}
        </Tag>
    );
};

export default Typography;
