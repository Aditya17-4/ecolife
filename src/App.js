import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from "./components/home";
import About from "./components/about";
import Blog from "./components/Blog";
import Navbar from "./components/Navbar";
import Checkout from "./components/Checkoutfolder/Checkout";
import Cart from "./components/cart";
import Payment from "./components/Checkoutfolder/payment";

function App() {
	return (
		<div>
			<section className="App">
				<Router>
					<Navbar />
					<Switch>
						{/* <Route path="/home" exact component={Home}></Route> */}
						<Route path="/about" component={About} />
						<Route path="/cart" component={Cart} />
						<Route path="/Blog" component={Blog} />
						<Route path="/Checkout" component={Checkout} />
						<Route path="/payment" component={Payment} />
					</Switch>
				</Router>
			</section>
		</div>
	);
}

export default App;
