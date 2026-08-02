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
			<h2 className="title">Skills</h2>
			<div className="skills-container">
				{skills.map((skill) => (
					<div key={skill} className="skill-card">
						<h3 className="skill-title">{skill}</h3>
					</div>
				))}
			</div>
		</section>
	);
};

export default MySkills;
