import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Redirect, useHistory } from "react-router-dom";
export const SignupView = function() {
	const { actions, store } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [businessName, setBusinessName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [address, setAddress] = useState("");
	const history = useHistory();
	return (
		<>
			{store.token ? <Redirect to="/private" /> : ""}
			<div className="container d-flex flex-column h-100 justify-content-center">
				<div className="row justify-content-center">
					<div className="col-4">
						<form className="form-signup">
							<img
								className="mb-4"
								src="/docs/4.5/assets/brand/bootstrap-solid.svg"
								alt=""
								width="72"
								height="72"
							/>
							<h1 className="h3 mb-3 font-weight-normal">Please sign up</h1>
							<label htmlFor="businessName" className="sr-only">
								businessName
							</label>

							<input
								type="name"
								id="inputBusinessName"
								className="form-control mb-2 "
								placeholder="Business Name"
								onChange={event => setBusinessName(event.target.value)}
								required
								autoFocus
							/>

							<label htmlFor="inputAddress" className="sr-only">
								address
							</label>

							<input
								type="address"
								id="inputAddress"
								className="form-control  mb-2"
								placeholder="Business Address"
								onChange={event => setAddress(event.target.value)}
								required
								autoFocus
							/>
							<label htmlFor="inputPhoneNumber" className="sr-only">
								phoneNumber
							</label>

							<input
								type="phone number"
								id="inputAddress"
								className="form-control  mb-2"
								placeholder="Phone Number"
								onChange={event => setPhoneNumber(event.target.value)}
								required
								autoFocus
							/>

							<label htmlFor="inputEmail" className="sr-only">
								email
							</label>

							<input
								type="email"
								id="inputEmail"
								className="form-control mb-2"
								placeholder="Business Email"
								onChange={event => setEmail(event.target.value)}
								required
								autoFocus
							/>
							<label htmlFor="inputPassword" className="sr-only">
								password
							</label>
							<input
								type="password"
								id="inputPassword"
								className="form-control mb-2"
								placeholder="Password"
								onChange={event => setPassword(event.target.value)}
								required
							/>
							<div className="checkbox mb-3">
								<label>
									<input type="checkbox" value="remember-me" /> Remember me
								</label>
							</div>
							<button
								className="btn btn-lg btn-primary btn-block"
								type="button"
								onClick={async () => {
									let success = await actions.signup(
										businessName,
										address,
										phoneNumber,
										email,
										password
									);
									if (success) {
										history.push("/private");
									} else {
										alert("something went wrong, please try again");
									}
								}}>
								Sign up
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};
