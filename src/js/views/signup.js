import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Redirect } from "react-router-dom";
export const SignupView = function() {
	const { actions, store } = useContext(Context);
	const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [business_name, setBusiness_name] = useState("");
    const [phone_number, setPhone_number] = useState("");
    const [address, setAddress] = useState("");


	return (
		<div>
			{store.token ? <Redirect to="/signup" /> : ""}
            <input type="text" placeholder="enter business name" onChange={event => setBusiness_name(event.target.value)} />
            <input type="text" placeholder="enter business address" onChange={event => setAddress(event.target.value)} />
			<input type="text" placeholder="enter business email" onChange={event => setEmail(event.target.value)} />            
			<input type="text" placeholder="enter phone number" onChange={event => setPhone_number(event.target.value)} />            
            <input type="password" placeholder="enter password" onChange={event => setPassword(event.target.value)} />
			<input type="button" value="send" onClick={async () => actions.signup(email, password)} />
		</div>
	);
};
