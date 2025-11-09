import classNames from "clsx";
import type { FC, HTMLAttributes } from "react";

import css from "./typography.module.scss";

type Variant =
	| "heading1"
	| "heading2"
	| "heading3"
	| "title"
	| "subtitle"
	| "body1"
	| "body2";

type Align = "left" | "center" | "right";
type Elements = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

const VariantTags: { [key in Variant]: Elements } = {
	heading1: "h1",
	heading2: "h2",
	heading3: "h3",
	title: "h4",
	subtitle: "h5",
	body1: "p",
	body2: "p",
};

interface TypographyProps extends HTMLAttributes<HTMLElement> {
	variant?: Variant;
	align?: Align;
	sub?: boolean;
	as?: Elements;
}

const Typography: FC<TypographyProps> = ({
	variant = "body1",
	align = "left",
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
		className,
	);

	return (
		<Tag className={classes} {...props}>
			{children}
		</Tag>
	);
};

export default Typography;
