import React from "react";
import "./Footer.css";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-container">
				<p className="footer-text">© 2026 Sanskar Jaiswal. Built with care.</p>
				<div className="footer-socials">
					<a
						href="https://www.linkedin.com/in/sanskar-dev-ops/"
						target="_blank"
						rel="noopener noreferrer"
						className="social-icon"
						aria-label="LinkedIn"
					>
						<i className="fab fa-linkedin"></i>
					</a>
					<a
						href="https://github.com/Sanskarjaas"
						target="_blank"
						rel="noopener noreferrer"
						className="social-icon"
						aria-label="GitHub"
					>
						<i className="fab fa-github"></i>
					</a>
					<a
						href="mailto:sanskar6jaiswal@gmail.com"
						className="social-icon"
						aria-label="Email"
					>
						<i className="fas fa-envelope"></i>
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
