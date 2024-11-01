import type { FC } from 'react';
import Column from '../../components/column/column';
import Row from '../../components/row/row';
import Typography from '../../components/typography/typography';

import css from './banner.module.scss';

const Banner: FC = () => {
    return (
        <Row className={css.wrapper}>
            <Column size={{ xs: 12, xl: 6 }}>
                <Typography variant="heading1">Maikel</Typography>
            </Column>
            <Column size={{ xs: 12, xl: 6 }}>
                <Typography variant="heading3" sub>
                    Hello there! My name is Maikel and I am a full stack
                    engineer from The Netherlands.
                </Typography>
            </Column>
        </Row>
    );
};

export default Banner;
