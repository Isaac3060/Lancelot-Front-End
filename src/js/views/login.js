import React, { useState } from "react";

export const LoginView = function() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	return (
		<div>
			<input type="text" placeholder="enter your email" onChange={event => setEmail(event.target.value)} />
			<input type="password" placeholder="enter password" onChange={event => setPassword(event.target.value)} />
			<input
				type="button"
				value="send"
				onClick={async () => {
					const response = await fetch(
						"https://3000-e307ce44-8256-44cd-8adb-33e714603e1b.ws-us02.gitpod.io/token",
						{
							method: "POST",
							headers: {
								"Content-Type": "application/json"
							},
							body: JSON.stringify({
								email: email,
								password: password
							})
						}
					);
					const body = await response.json();
					if (response.status == 200) alert("Your are logged in" + body.jwt);
					else alert("login failed");
				}}
			/>
		</div>
	);
};
