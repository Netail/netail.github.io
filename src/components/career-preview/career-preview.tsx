import type { FC } from 'react';
import type { Career } from '../../interfaces/career';
import Column from '../column/column';
import Row from '../row/row';
import Typography from '../typography/typography';

interface CareerPreviewProps {
    career: Career;
}

const CareerPreview: FC<CareerPreviewProps> = ({ career }) => {
    return (
        <Row>
            <Column size={{ xs: 12, lg: 6 }}>
                <Typography variant="title" sub>
                    {career.location}
                </Typography>
            </Column>
            <Column size={{ xs: 12, lg: 6 }}>
                <Typography variant="title" align="left" sub>
                    {career.begin}-{career.end ?? 'Current'}
                </Typography>
            </Column>
            <Column>
                <Typography variant="title">{career.title}</Typography>
                <Typography variant="subtitle">{career.company}</Typography>
            </Column>
        </Row>
    );
};

export default CareerPreview;
