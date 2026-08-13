import { motion } from "framer-motion";
import "./Dashboard.css";

const Dashboard = () => {
	return (
		<motion.section
			id="home"
			className="dashboard-section"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.7, ease: "easeOut" }}
		>
			<div className="container">
				<motion.div
					className="text"
					initial={{ opacity: 0, x: -42, y: 16 }}
					animate={{ opacity: 1, x: 0, y: 0 }}
					transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
				>
					<h1>Hello, I'm</h1>
					<h1>Sanskar Jaiswal</h1>
					<div className="des">
						<h4>DevOps Engineer | Cloud &amp; Web Solutions</h4>
						<h4>
							“DevOps is not a goal, but a never-ending process of continual
							improvement.”
						</h4>
						<h4>— Jez Humble</h4>
					</div>

					<div className="button-group">
						<a href="#projects" className="button">
							View Projects
						</a>
						<a href="#contact" className="button">
							Let&apos;s Talk
						</a>
					</div>
				</motion.div>
				<motion.div
					className="profileimage"
					initial={{ opacity: 0, x: 36, scale: 0.94, rotate: 4 }}
					animate={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
					transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
				>
					<img src="/image/mypic.png" alt="Sanskar Jaiswal" />
				</motion.div>
			</div>
		</motion.section>
	);
};

export default Dashboard;
