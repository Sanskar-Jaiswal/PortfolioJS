import React from "react";
import { motion } from "framer-motion";
import "./Workedfor.css";

const brands = [
	{ name: "ABB", src: "/image/ABB.png" },
	{ name: "Crompton", src: "/image/Crompton.png" },
	{ name: "Flipkart", src: "/image/Flipkart.png" },
	{ name: "Air India", src: "/image/AirIndia.png" },
	{ name: "Akasa", src: "/image/Akasa_Air_logo.svg" },
	{ name: "Indigo", src: "/image/IndiGo_Airlines_logo.svg" },
	{ name: "Equitas", src: "/image/Equitas-logo.png" },
	{ name: "Aldar", src: "/image/Aldar.png" },
	{ name: "ITC", src: "/image/ITC_Limited_Logo.svg" },
	{ name: "PwC", src: "/image/PwC.svg" },
	{ name: "Wipro", src: "/image/wipro.png" },
	{ name: "Scottish Widows", src: "/image/Sw.png" },
	{ name: "Lloyds Bank", src: "/image/lloyds.png" },
	{ name: "Halifax", src: "/image/halifax.png" },
];

const Workedfor = () => {
	return (
		<section id="workedfor" className="worked-section">
			<motion.h1
				className="worked-title"
				initial={{ opacity: 0, y: 16 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 0.5, ease: "easeOut" }}
			>
				Worked For
			</motion.h1>
			<div className="worked-grid">
				{brands.map(({ name, src }, index) => (
					<motion.div
						key={name}
						className={`brand-card ${!src ? "brand-placeholder" : ""}`}
						initial={{ opacity: 0, y: 20, scale: 0.96 }}
						whileInView={{ opacity: 1, y: 0, scale: 1 }}
						viewport={{ once: true, amount: 0.2 }}
						transition={{
							duration: 0.5,
							delay: index * 0.06,
							ease: "easeOut",
						}}
						whileHover={{ y: -8, scale: 1.02 }}
					>
						{src ? (
							<img className="logo-image" src={src} alt={name} />
						) : (
							name
						)}
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default Workedfor;
