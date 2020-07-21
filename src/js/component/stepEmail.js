import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { Redirect, useHistory, useParams } from "react-router-dom";

export const StepEmail = () => {
	const history = useHistory();
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	return (
		<>
			<div className="container">
				<div className="row d-flex justify-content-center">
					<div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
						<form className="justify-content-center">
							<label htmlFor="inputEmail">Email Address</label>
							<input
								onChange={event => setEmail(event.target.value)}
								type="name"
								className="form-control"
								id="inputEmail"
								placeholder
							/>
						</form>
					</div>
					<button
						onClick={() => {
							actions
								.getSingleVisitor(email)
								.then(data => (data ? history.push("/questions/3") : history.push("/questions/1")));
						}}
						type="button"
						className="boton-email btn btn-primary">
						Next
					</button>
				</div>
			</div>
		</>
	);
};
