import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Redirect } from "react-router-dom";
export const SignupView = function() {
	const { actions, store } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	return (
		<div>
			{store.token ? <Redirect to="/registration" /> : ""}
			<input type="text" placeholder="enter your email" onChange={event => setEmail(event.target.value)} />
			<input type="password" placeholder="enter password" onChange={event => setPassword(event.target.value)} />
			<input type="button" value="send" onClick={async () => actions.signup(email, password)} />
		</div>
	);
};
