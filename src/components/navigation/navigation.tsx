import { motion, useScroll, useSpring } from 'framer-motion';
import type { FC } from 'react';
import { FiStar } from 'react-icons/fi';
import Link from '../link/link';

import css from './navigation.module.scss';

const Navigation: FC = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <>
            <nav className={css.nav}>
                <motion.div className={css.progress} style={{ scaleX }} />
                <div className={css.items}>
                    <FiStar className={css.icon} />
                    <Link label="Contact" href="#contact" target="_self" />
                </div>
            </nav>
        </>
    );
};

export default Navigation;
