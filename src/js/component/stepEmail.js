import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { Redirect, useHistory, useParams } from "react-router-dom";

export const StepEmail = () => {
	const history = useHistory();
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	return (
		<>
			<div className="container d-flex flex-column h-100 justify-content-center">
				<div className="col d-flex justify-content-center">
					<div className="col-1" />
					<form className="justify-content-center">
						<div className="form-group">
							<label htmlFor="inputEmail">Email Address</label>
							<input
								onChange={event => setEmail(event.target.value)}
								type="name"
								className="form-control"
								id="inputEmail"
								placeholder
							/>
						</div>
						<button
							onClick={() => {
								actions
									.getSingleVisitor(email)
									.then(data => (data ? history.push("/questions/3") : history.push("/questions/1")));
							}}
							type="button"
							className="btn btn-primary">
							Next
						</button>
					</form>
				</div>
			</div>
		</>
	);
};
