import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Redirect } from "react-router-dom";
export const LoginView = function() {
	const { actions, store } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	return (
		<>
			{store.token != null ? <Redirect to="/private" /> : ""}

			<div className="container">
				<div className="row justify-content-center">
					<div className="col-4">
						<form className="form-signin ">
							{/* <img
								className="mb-4"
								src="/docs/4.5/assets/brand/bootstrap-solid.svg"
								alt=""
								width="72"
								height="72"
							/> */}
							<h4 className="mb-3 font-weight-normal text-center">Enter your business information</h4>
							<label htmlFor="inputEmail" className="sr-only">
								Email address
							</label>

							<input
								type="email"
								id="inputEmail"
								className="form-control mb-2"
								placeholder="Email address"
								onChange={event => setEmail(event.target.value)}
								required
								autoFocus
							/>
							<label htmlFor="inputPassword" className="sr-only">
								Password
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
								onClick={async () => actions.login(email, password)}>
								Sign in
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};
