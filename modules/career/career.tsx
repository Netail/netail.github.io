import type { FC } from 'react';
import CareerPreview from '../../components/career-preview/career-preview';
import Column from '../../components/column/column';
import Row from '../../components/row/row';
import Typography from '../../components/typography/typography';
import type { Career } from '../../interfaces/career';

import css from './career.module.scss';

interface ClientsProps { 
    career: Career[];
}

const Career: FC<ClientsProps> = ({ career }) => {
    return (
        <Row>
            <Column size={{ xs: 12, lg: 6 }}>
                <Typography variant='heading2' style={{ position: 'sticky', top: '0' }}>Career</Typography>
            </Column>
            <Column size={{ xs: 12, lg: 6 }}>
                <div className={css.wrapper}>
                    {career.map((career, index) => (
                        <CareerPreview career={career} key={index} />
                    ))}
                </div>
            </Column>
        </Row>
    );
}

export default Career;