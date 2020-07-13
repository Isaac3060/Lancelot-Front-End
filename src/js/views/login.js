import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Redirect } from "react-router-dom";
export const LoginView = function() {
	const { actions, store } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	return (
		<>
			{store.token ? <Redirect to="/private" /> : ""}
			<div className="input-group">
				<input
					className="form-control"
					type="text"
					placeholder="enter your email"
					onChange={event => setEmail(event.target.value)}
				/>
			</div>
			<div className="input-group col-6">
				<input
					className="form-control"
					type="password"
					placeholder="enter password"
					onChange={event => setPassword(event.target.value)}
				/>
			</div>
			<button className="btn btn-primary" type="button" onClick={async () => actions.login(email, password)}>
				Send
			</button>
		</>
	);
};
