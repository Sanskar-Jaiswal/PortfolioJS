import "./MyProjects.css";

const MyProjects = () => {
	return (
		<section id="projects">
			{" "}
			<h1 className="title">Featured Projects</h1>
			<div className="card-container">
				<div className="card">
					<img src="./image/devops.png" alt="Image1" className="card-img" />
					<h3 className="card-title">DevOps & CI/CD Automation</h3>
					<p className="card-description">
						Projects features that automated on CI/CD pipelines with Jenkins,
						Docker, and Kubernetes and storing artifacts in UrbanCode Deploy
						maintaining the version for reliable deployment across Azure,
						enhancing scalability and efficiency.
					</p>
				</div>
				<div className="card">
					<img src="./image/UIUX.png" alt="Image2" className="card-img" />
					<h3 className="card-title">UI/UX Design:</h3>
					<p className="card-description">
						Projects highlight a design-focused approach with Figma, blending
						professional aesthetics and functionality, tailored for intuitive
						and visually appealing interfaces across web and mobile.
					</p>
				</div>
				<div className="card">
					<img src="./image/dotnet.png" alt="Image3" className="card-img" />
					<h3 className="card-title">.NET Development</h3>
					<p className="card-description">
						Includes full-stack solutions such as a real-time chat application
						built with clean architecture, emphasizing scalable backend
						development and secure data management .
					</p>
				</div>
				<div className="card">
					<img src="./image/terra.png" alt="Image4" className="card-img" />
					<h3 className="card-title"> IaC with Terraform</h3>
					<p className="card-description">
						Using Terraform, automated and manages infrastructure on Azure,
						enabling scalable, consistent, and repeatable environments for
						development and testing.
					</p>
				</div>
				<div className="card">
					<img src="./image/AI.png" alt="Image5" className="card-img" />
					<h3 className="card-title">
						Microsoft Azure AI Fundamentals | Aspiring AI & Cloud Professional
					</h3>
					<p className="card-description">
						AI Fundamentals: Strong grasp of AI workloads, principles, and types
						including machine learning and deep learning. Microsoft Azure AI
						Services: Hands-on knowledge of Azure Cognitive Services (Vision,
						Language, and Decision capabilities). Machine Learning Concepts:
						Understanding of supervised, unsupervised learning and basic model
						training techniques.
					</p>
				</div>
				<div className="card">
					<img src="./image/micro1.png" alt="Image6" className="card-img" />
					<h3 className="card-title">Micro 1 Certified</h3>
					<p className="card-description">
						A micro-certificate, also known as a micro-credential, is a short,
						focused certification that validates an individual's expertise in a
						specific, narrow area of knowledge or skill. It's a compact
						qualification designed to be completed quickly, often online, and is
						distinct from traditional degrees or longer certification programs.{" "}
					</p>
				</div>
			</div>
		</section>
	);
};

export default MyProjects;
