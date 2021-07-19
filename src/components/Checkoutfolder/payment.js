import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";

import "./payment.css";

function Pay() {
	let url = " https://rzp.io/l/VqXk2IK";

	return (
		<div>
			<br></br>
			<div className="container">
				<div className="btn-11">
					<MuiThemeProvider>
						<RaisedButton variant="contained" color="primary">
							<a href={url}>Pay</a>
						</RaisedButton>
					</MuiThemeProvider>
				</div>
			</div>
		</div>
	);
}

export default Pay;
