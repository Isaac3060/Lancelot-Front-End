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
			<div className="container">
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
							<label
								htmlFor="businessName"
								className="sr-only"
								onChange={event => setBusinessName(event.target.value)}>
								businessName
							</label>

							<input
								type="name"
								id="inputBusinessName"
								className="form-control"
								placeholder="Business Name"
								required
								autoFocus
							/>

							<label
								htmlFor="inputAddress"
								className="sr-only"
								onChange={event => setAddress(event.target.value)}>
								address
							</label>

							<input
								type="address"
								id="inputAddress"
								className="form-control"
								placeholder="Business Address"
								required
								autoFocus
							/>
							<label
								htmlFor="inputPhoneNumber"
								className="sr-only"
								onChange={event => setPhoneNumber(event.target.value)}>
								phoneNumber
							</label>

							<input
								type="phone number"
								id="inputAddress"
								className="form-control"
								placeholder="Phone Number"
								required
								autoFocus
							/>

							<label
								htmlFor="inputEmail"
								className="sr-only"
								onChange={event => setEmail(event.target.value)}>
								email
							</label>

							<input
								type="email"
								id="inputEmail"
								className="form-control"
								placeholder="Business Email"
								required
								autoFocus
							/>
							<label
								htmlFor="inputPassword"
								className="sr-only"
								onChange={event => setPassword(event.target.value)}>
								password
							</label>
							<input
								type="password"
								id="inputPassword"
								className="form-control"
								placeholder="Password"
								required
							/>
							<div className="checkbox mb-3">
								<label>
									<input type="checkbox" value="remember-me" /> Remember me
								</label>
							</div>
							<button
								className="btn btn-lg btn-primary btn-block"
								type="submit"
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
							<p className="mt-5 mb-3 text-muted">&copy; 2017-2020</p>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};
