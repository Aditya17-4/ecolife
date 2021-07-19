import React from "react";
import "./about.css";

const About = () => {
	return (
		<div className="container-1">
			<div className="container">
				<h1>About Us</h1>
				<div className="img">
					<img src="../images/1.jpg" alt="us"></img>
				</div>
				<div className="text">
					<h2 className="card-title">Welcome To Ecolife</h2>
					<p className="card-text">
						We deal in all types of products from cosmetics to fruits and what
						not. You name it we have it, here at Ecolife we aim to deliver best
						products at affordable prices.
					</p>
				</div>
			</div>
			<div className="cards">
				<div className="col1">
					<h2 className="card-title">Our Company</h2>
					<p className="card-text text-secondary">
						Ecolife is a company that provides products for all age group and of
						all category at one stop.
					</p>
				</div>
				<div className="col2">
					<h2 className="card-title">Our Team</h2>
					<p className="card-text text-secondary">
						We are always here to help you at Ecolife, our team comprises of
						highly trained individual ready to help you 24/7.
					</p>
				</div>
				<div className="col3">
					<h2 className="card-title">Testimonial</h2>
					<p className="card-text text-secondary">
						We wanted to offer our customers and clients a unique level of
						service by providing an innovative web based ecommerce platform, and
						Pace have delivered a solution that does exactly what we were
						looking for.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
