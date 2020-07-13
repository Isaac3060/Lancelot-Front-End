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

			<div className="input-group">
				<input
					className="form-control col-2"
					type="text"
					placeholder="enter business name"
					onChange={event => setBusinessName(event.target.value)}
				/>
			</div>
			<div className="input-group">
				<input
					className="form-control col-2"
					type="text"
					placeholder="enter business address"
					onChange={event => setAddress(event.target.value)}
				/>
			</div>
			<div className="input-group">
				<input
					className="form-control col-2"
					type="text"
					placeholder="enter business email"
					onChange={event => setEmail(event.target.value)}
				/>
			</div>
			<div className="input-group">
				<input
					type="text"
					placeholder="enter phone number"
					onChange={event => setPhoneNumber(event.target.value)}
				/>
			</div>
			<div className="input-group">
				<input
					className="form-control col-2"
					type="password"
					placeholder="enter password"
					onChange={event => setPassword(event.target.value)}
				/>
			</div>
			<button
				className="btn btn-primary"
				type="button"
				value="send"
				onClick={async () => {
					let success = await actions.signup(businessName, address, phoneNumber, email, password);
					if (success) {
						history.push("/private");
					} else {
						alert("something went wrong, please try again");
					}
				}}
			/>
		</>
	);
};
