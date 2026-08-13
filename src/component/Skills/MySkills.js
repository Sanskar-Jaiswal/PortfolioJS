import { motion } from "framer-motion";
import "./MySkills.css";

const skills = [
	"C#",
	"Git",
	"SonarQube",
	"CSS",
	"Docker",
	"HTML",
	"Kubernetes",
	"React",
	"Jenkins",
	"Terraform",
	"TypeScript",
	"Rancher",
	"Azure",
	"Redux",
	"Visual Studio",
	"Entity Framework",
	"ASP.NET Core Web API",
	"CI/CD",
	"Linux",
	"Azure Web App",
	"Nexus",
	"Formik",
];

const MySkills = () => {
	return (
		<section id="skills" className="skills-section">
			<motion.h2
				className="title"
				initial={{ opacity: 0, y: 18 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.4 }}
				transition={{ duration: 0.5, ease: "easeOut" }}
			>
				Skills
			</motion.h2>
			<div className="skills-container">
				{skills.map((skill, index) => (
					<motion.div
						key={skill}
						className="skill-card"
						initial={{ opacity: 0, y: 18, scale: 0.96 }}
						whileInView={{ opacity: 1, y: 0, scale: 1 }}
						viewport={{ once: true, amount: 0.2 }}
						transition={{
							duration: 0.45,
							delay: index * 0.04,
							ease: "easeOut",
						}}
						whileHover={{ y: -5, scale: 1.02 }}
					>
						<h3 className="skill-title">{skill}</h3>
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default MySkills;
