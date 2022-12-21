import type { FC } from 'react';
import Column from '../../components/column/column';
import Row from '../../components/row/row';
import Typography from '../../components/typography/typography';

const About: FC = () => {
    return (
        <Row>
            <Column size={{ xs: 12, lg: 6 }}>
                <Typography variant='heading2' style={{ position: 'sticky', top: '0' }}>About</Typography>
            </Column>
            <Column size={{ xs: 12, lg: 6 }}>
                <Typography variant='title'>Hello there!</Typography>
                <Typography variant='subtitle' sub>
                    An independent worker who dares to take the initiative to find a solution. I try to bring tasks that I take on to a successful conclusion, by also looking critically at my own work.
                    <br/> <br/>
                    As a Software Engineer I enjoy working with the Next.JS, Node.JS, Spring boot and Postgres Tech Stack, but always want to try new technologies.
                </Typography>
            </Column>
        </Row>
    );
}

export default About;