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
		<div>
			{store.token ? <Redirect to="/private" /> : ""}
			<input
				type="text"
				placeholder="enter business name"
				onChange={event => setBusinessName(event.target.value)}
			/>
			<input
				type="text"
				placeholder="enter business address"
				onChange={event => setAddress(event.target.value)}
			/>
			<input type="text" placeholder="enter business email" onChange={event => setEmail(event.target.value)} />
			<input
				type="text"
				placeholder="enter phone number"
				onChange={event => setPhoneNumber(event.target.value)}
			/>
			<input type="password" placeholder="enter password" onChange={event => setPassword(event.target.value)} />
			<input
				type="button"
				value="send"
				onClick={async () => {
					let success = await actions.signup(email, password);
					if (success) {
						history.push("/private");
					} else {
						alert("something went wrong, please try again");
					}
				}}
			/>
		</div>
	);
};
