import type { NextPage } from 'next';
import Navigation from '../components/navigation/navigation';
import Container from '../components/container/container';
import Row from '../components/row/row';
import Banner from '../modules/banner/banner';
import Projects from '../modules/projects/projects';
import Career from '../modules/career/career';
import About from '../modules/about/about';
import Contact from '../modules/contact/contact';
import { PROJECTS } from '../constants/projects';
import { CAREER } from '../constants/career';
import { CONTACT } from '../constants/contact';

const Index: NextPage = () => {
    return (
        <>
            <Navigation />
            <Container>
                <Row direction='column' spacingRow={16}>
                    <Banner />
                    <Projects projects={PROJECTS} />
                    <About />
                    <Career career={CAREER} />
                    <Contact contact={CONTACT} />
                </Row>
            </Container>
        </>
    );
};

export default Index;
