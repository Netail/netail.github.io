import type { NextPage } from "next";
import Container from "../components/container/container";
import Navigation from "../components/navigation/navigation";
import Row from "../components/row/row";
import { CAREER } from "../constants/career";
import { CONTACT } from "../constants/contact";
import { PROJECTS } from "../constants/projects";
import About from "../modules/about/about";
import Banner from "../modules/banner/banner";
import Career from "../modules/career/career";
import Contact from "../modules/contact/contact";
import Projects from "../modules/projects/projects";

const Index: NextPage = () => {
	return (
		<>
			<Navigation />
			<Container>
				<Row direction="column" spacingRow={16}>
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
