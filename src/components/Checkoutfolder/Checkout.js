import React from "react";
import { Link } from "react-router-dom";
import "./checkout.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(1),
	},
}));
function Checkout() {
	const classes = useStyles();
	// const Checkout = () => {
	return (
		<section>
			<div className="row">
				<div className="col-75">
					<div class="container">
						<div class="row">
							<div class="col-50">
								<h3>Billing Address</h3>
								<form>
									<label for="fname">
										<i class="fa fa-user"></i> Full Name
									</label>
									<input
										type="text"
										id="fname"
										name="firstname"
										placeholder="John M. Doe"
										required></input>
									<label for="email">
										<i class="fa fa-envelope"></i> Email
									</label>
									<input
										type="text"
										id="email"
										name="email"
										placeholder="john@example.com"
										required></input>
									<label for="adr">
										<i class="fa fa-address-card-o"></i> Address
									</label>
									<input
										type="text"
										id="adr"
										name="address"
										placeholder="542 W. 15th Street"
										required></input>
									<label for="city">
										<i class="fa fa-institution"></i> City
									</label>
									<input
										type="text"
										id="city"
										name="city"
										placeholder="New York"
										required></input>
									<div class="row">
										<div class="col-50">
											<label for="state">State</label>
											<input
												type="text"
												id="state"
												name="state"
												placeholder="NY"
												required></input>
										</div>
										<div class="col-50">
											<label for="zip">Zip</label>
											<input
												type="text"
												id="zip"
												name="zip"
												placeholder="10001"
												required></input>
										</div>
									</div>
								</form>
							</div>
							<div class="col-50">
								<form>
									<h3 className="h3">Payment</h3>
									<label for="fname">Accepted Cards</label>
									<div class="icon-container row">
										<i class="fa fa-cc-visa" style={{ color: "navy" }}></i>
										<i class="fa fa-cc-amex" style={{ color: "blue" }}></i>
										<i class="fa fa-cc-mastercard" style={{ color: "red" }}></i>
										<i
											class="fa fa-cc-discover"
											style={{ color: "orange" }}></i>
									</div>
									<div className="card">
										<label for="cname">Name on Card</label>

										<input
											type="text"
											id="cname"
											name="cardname"
											placeholder="John More Doe"
											required></input>
										<label for="ccnum">Credit card number</label>
										<input
											type="text"
											id="ccnum"
											name="cardnumber"
											placeholder="1111-2222-3333-4444"></input>
										<label for="expmonth" required>
											Exp Month
										</label>
										<input
											type="text"
											id="expmonth"
											name="expmonth"
											placeholder="September"
											required></input>

										<div class="row">
											<div class="col-50">
												<label for="expyear">Exp Year</label>
												<input
													type="text"
													id="expyear"
													name="expyear"
													placeholder="2018"
													required></input>
											</div>
											<div class="col-50">
												<label for="cvv">CVV</label>
												<input
													type="text"
													id="cvv"
													name="cvv"
													placeholder="352"
													required></input>
											</div>
										</div>
									</div>
								</form>
							</div>
							<div className="btn-1">
								<MuiThemeProvider>
									<Link to="/payment">
										<RaisedButton
											variant="contained"
											type="submit"
											color="primary"
											className={classes.button}>
											checkout
										</RaisedButton>
									</Link>
								</MuiThemeProvider>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Checkout;
