import Dashboard from "../component/Dashboard/Dashboard";
import MyCertification from "../component/Certification/MyCertification";
import MyProjects from "../component/Projects/MyProjects";
import MySkills from "../component/Skills/MySkills";
import Contact from "../component/Contact/Contact";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import About from "../component/About/about";
import Workedfor from "../component/Workedfor/Workedfor";
import "./Homepage.css";

const Homepage = () => {
	return (
		<div className="body">
			<Header />
			<Dashboard />
			<About />
			<Workedfor />
			
			<MyProjects />
			<MyCertification />
			<MySkills />
			<Contact />
			<Footer />
		</div>
	);
};

export default Homepage;
