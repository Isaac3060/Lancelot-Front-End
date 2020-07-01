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
					const response = await fetch("/token", {
						method: "POST",
						body: JSON.stringify({
							email: email,
							password: password
						})
					});
					if (response.status == 200) alert("Your are logged in");
					else alert("login failed");
				}}
			/>
		</div>
	);
};
