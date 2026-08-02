import React from "react";
import "./Workedfor.css";

const Workedfor = () => {
	return (
		<section id="workedfor" className="worked-section">
			<h1 className="worked-title">Worked For</h1>
			<div className="worked-grid">
				<div className="brand-card brand-placeholder">ABB</div>
				<div className="brand-card brand-placeholder">Crompton</div>
				<div className="brand-card brand-placeholder">Flipkart</div>
				<div className="brand-card brand-placeholder">AirIndia</div>
				<div className="brand-card brand-placeholder">Akasa</div>
				<div className="brand-card brand-placeholder">Indigo</div>
				<div className="brand-card brand-placeholder">Equitas</div>
				<div className="brand-card brand-placeholder">Aldar</div>
				<div className="brand-card brand-placeholder">ITC</div>
				<div className="brand-card">
					<img className="logo-image" src="/image/wipro.png" alt="Wipro" />
				</div>
				<div className="brand-card">
					<img className="logo-image" src="/image/Sw.png" alt="Scottish Widows" />
				</div>
				<div className="brand-card">
					<img className="logo-image" src="/image/lloyds.png" alt="Lloyds Bank" />
				</div>
				<div className="brand-card">
					<img className="logo-image" src="/image/halifax.png" alt="Halifax" />
				</div>
			</div>
		</section>
	);
};

export default Workedfor;
