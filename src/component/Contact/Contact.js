import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
	const [formData, setdata] = useState({ name: "", email: "", message: "" });
	const handleChange = (e) => {
		const { name, value } = e.target;
		setdata({
			...formData,
			[name]: value,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const { name, email, message } = formData;
		const formattedMessage = `Hello! You have a new message from your portfolio contact form:\n\n*Name*: ${name}\n*Email*: ${email}\n*Message*: ${message}`;
		const phoneNumber = "7809131211";
		const whatsppLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(formattedMessage)}`;
		window.open(whatsppLink, "_blank");
	};

	return (
		<section id="contact" className="contact-section">
			<div className="contact-container">
				<h2 className="title">Let's Connect</h2>
				<p className="section-description">
					I'd love to hear from you! Please fill out the form below and I'll get
					back to you as soon as possible.
				</p>

				<form className="contact-form" onSubmit={handleSubmit}>
					<div className="form-group">
						<input
							type="text"
							id="name"
							name="name"
							placeholder="Your Name"
							value={formData.name}
							onChange={handleChange}
							required
						/>
					</div>

					<div className="form-group">
						<input
							type="email"
							id="email"
							name="email"
							placeholder="Your Email"
							value={formData.email}
							onChange={handleChange}
							required
						/>
					</div>

					<div className="form-group">
						<textarea
							id="message"
							name="message"
							rows="4"
							placeholder="Your Message"
							value={formData.message}
							onChange={handleChange}
							required
						></textarea>
					</div>

					<button type="submit" className="submit-btn">
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
