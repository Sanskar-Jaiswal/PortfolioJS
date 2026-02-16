import "./about.css";
const about = () => {
	return (
		<section id="about">
			<div className="container">
				<div>
					<h3 className="title">About Me</h3>
					<div className="profileimage">
						<img src="./image/pic.jpeg" alt="myimage" />
					</div>
				</div>

				<p className="card-description" text-color="black">
					<h5>Why Hire Me?</h5>A passionate and results-driven DevOps and Cloud
					Engineer with hands-on experience in designing, automating, and
					managing scalable infrastructure and deployment pipelines. I have
					practical expertise in infrastructure provisioning, CI/CD
					implementation, and container orchestration, supported by
					industry-recognized cloud certifications including Google Cloud
					Associate Cloud Engineer and AWS Certified Cloud Practitioner. I have
					worked extensively with tools such as Jenkins, Terraform, Docker, and
					Kubernetes to automate workflows, streamline application delivery, and
					ensure reliable deployments across environments. My experience
					includes building GitOps-driven pipelines, provisioning cloud
					resources, and managing cloud-native services across AWS, Azure, and
					GCP platforms. Proficient in monitoring and observability, I have
					implemented solutions using ELK Stack, Grafana, and other logging and
					metrics tools to maintain system visibility and performance
					optimization. I also bring full-stack development exposure with .NET
					and React, enabling effective collaboration across development and
					operations teams and integration of testing and automation into CI/CD
					pipelines. With a strong academic foundation in Computer Science and a
					commitment to continuous learning, I am focused on growing as a
					DevOps/SRE professional while contributing to scalable, resilient, and
					efficient engineering solutions.
				</p>
			</div>
		</section>
	);
};

export default about;
