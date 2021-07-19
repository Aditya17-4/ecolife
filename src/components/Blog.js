import React from "react";
import "./blog.css";

const Blog = () => {
	return (
		<section className="Home">
			<div className="blog-posts">
				<div className="header-1">
					<h4>Blog Page</h4>
				</div>
				<div className="row">
					<div className="col-md-6 mb-res-sm-30px">
						<div className="single-blog-post blog-grid-post">
							<div className="blog-post-media">
								<div className="blog-image">
									<a href>
										<img src="../images/blog-1.jpg" alt="us"></img>
									</a>
								</div>
							</div>
							<div className="blog-post-content-inner mt-30">
								<h2>Dairy Products</h2>
								<ul className="blog-page-meta">
									<li>
										<p className="header">
											<i className="bi bi-person"></i>Admin
										</p>
									</li>
									<li>
										<p className="header">
											<i className="ion-calendar"></i> 24 April, 2020
										</p>
									</li>
								</ul>
								<p className="content">
									Dairy products or milk products are a type of food produced
									from or containing the milk of mammals, most commonly cattle,
									water buffaloes, goats, sheep.
								</p>
							</div>
						</div>
						<br></br>
						<div className="single-blog-post blog-grid-post">
							<div className="blog-post-media">
								<div className="blog-image">
									<a href>
										<img src="../images/blog-2.jpg" alt="us"></img>
									</a>
								</div>
							</div>
							<div className="blog-post-content-inner mt-30">
								<h2>Snacks Products</h2>
								<ul className="blog-page-meta">
									<li>
										<p className="header">
											<i className="bi bi-person"></i>Admin
										</p>
									</li>
									<li>
										<p className="header">
											<i className="ion-calendar"></i> 24 April, 2020
										</p>
									</li>
								</ul>
								<p className="content">
									A snack is a small portion of food generally eaten between
									meals. Snacks come in a variety of forms including packaged
									snack foods and other processed foods.
								</p>
							</div>
						</div>
						<br></br>
						<div className="single-blog-post blog-grid-post">
							<div className="blog-post-media">
								<div className="blog-image">
									<a href>
										<img src="../images/blog-3.jpg" alt="us"></img>
									</a>
								</div>
							</div>
							<div className="blog-post-content-inner mt-30">
								<h2>Fruits</h2>
								<ul className="blog-page-meta">
									<li>
										<p className="header">
											<i className="bi bi-person"></i>Admin
										</p>
									</li>
									<li>
										<p className="header">
											<i className="ion-calendar"></i> 24 April, 2020
										</p>
									</li>
								</ul>
								<p className="content">
									In botany, a fruit is the seed-bearing structure in flowering
									plants that is formed from the ovary after flowering. Fruits
									are the means by which flowering plants
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Blog;
