import "./Dashboard.css";

const Dashboard = () => {
	return (
		<section id="home" className="dashboard-section">
			<div className="container">
				<div className="text">
					<h1>Hello, I'm</h1>
					<h1>Sanskar Jaiswal</h1>
					<div className="des">
						<h4>DevOps Engineer & Website Designer</h4>
						<h4>
							“DevOps is not a goal, but a never-ending process of continual
							improvement.”
						</h4>
						<h4>— Jez Humble</h4>
					</div>

					<div className="button-group">
						<a href="#projects" className="button">
							My Work
						</a>
						<a href="#contact" className="button">
							Hire Me
						</a>
					</div>
				</div>
				<div className="profileimage">
					<img src="/image/pic.jpeg" alt="Sanskar Jaiswal" />
				</div>
			</div>
		</section>
	);
};

export default Dashboard;
