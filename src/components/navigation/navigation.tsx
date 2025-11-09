import { motion, useScroll, useSpring } from "framer-motion";
import type { FC } from "react";

import css from "./navigation.module.scss";

const Navigation: FC = () => {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	return (
		<nav className={css.nav}>
			<motion.div className={css.progress} style={{ scaleX }} />
		</nav>
	);
};

export default Navigation;
