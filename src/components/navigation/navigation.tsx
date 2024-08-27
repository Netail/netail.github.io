import type { FC } from 'react';
import { FiStar } from 'react-icons/fi';
import Link from '../link/link';

import css from './navigation.module.scss';

interface NavigationProps {}

const Navigation: FC<NavigationProps> = () => {
    return (
        <nav className={css.nav}>
            <FiStar className={css.icon} />
            <Link label='Contact' href='#contact' target='_self' />
        </nav>
    );
};

export default Navigation;
