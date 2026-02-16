import "./Dashboard.css";

const Dashboard = () => {
	return (
		<div className="container">
			<div className="text">
				<h1>Hello I'm </h1>
				<h1>Sanskar Jaiswal</h1>
				<div className="des">
					<h4>Devops Engineer/Website designer</h4>

					<h4>
						“DevOps is not a goal, but a never-ending process of continual
						improvement” 
					</h4>
					<h4>(Jez Humble)</h4>
				</div>

				<div className="container">
					<a href="#projects" className="button">
						My Work{" "}
					</a>
					<a href="#contact" className="button">
						Hire me{" "}
					</a>
				</div>
			</div>
			<div className="profileimage">
				<img src="./image/pic.jpeg" alt="myimage" />
			</div>
		</div>
	);
};

export default Dashboard;
