import "./about.css";

const about = () => {
	return (
		<section id="about" className="about-section">
			<div className="about-wrapper">
				<div className="about-text">
					<h3 className="title">About Me</h3>
					<p className="subtitle">Why Hire Me?</p>
					<p>
						A passionate and results-driven DevOps and Cloud Engineer with hands-on
						experience designing, automating, and managing scalable infrastructure
						and deployment pipelines. I have practical expertise in infrastructure
						provisioning, CI/CD implementation, and container orchestration.
					</p>
					<p>
						I work with tools such as Jenkins, Terraform, Docker, and Kubernetes to
						automate workflows, streamline delivery, and ensure reliable deployments.
						I also bring full-stack exposure with .NET and React, enabling strong
						collaboration across development and operations teams.
					</p>
				</div>
			</div>
		</section>
	);
};

export default about;
