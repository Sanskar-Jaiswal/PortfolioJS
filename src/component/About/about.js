import "./about.css";

const about = () => {
	return (
		<section id="about" className="about-section">
			<div className="about-wrapper">
				<div className="about-text">
					<p className="subtitle">About Me</p>
					<h3 className="title">Building reliable systems and better digital experiences.</h3>
					<p>
						I’m a DevOps Engineer and Web Developer focused on creating scalable,
						efficient, and dependable technology solutions. My work sits at the
						intersection of cloud infrastructure, automation, and user-first product
						development.
					</p>
					<p>
						From CI/CD pipelines and infrastructure provisioning to responsive web
						interfaces, I help teams move faster without compromising stability.
						I enjoy turning complex technical challenges into practical systems that
						support business growth and long-term performance.
					</p>
				</div>
			</div>
		</section>
	);
};

export default about;
