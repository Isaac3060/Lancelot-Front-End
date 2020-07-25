import React, { useContext, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext.js";
import { Redirect, Link, useHistory } from "react-router-dom";
import lancelot from "../../img/Lancelot.png";
import smiley from "../../img/Smiley face.png";

export const Private = () => {
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { actions, store } = useContext(Context);
	return (
		<div className="text-center mt-5">
			{!store.token ? <Redirect to="/login" /> : ""}
			<h2>Welcome back!</h2>
			<p>
				<img
					src={smiley}
					style={{
						width: "300px",
						height: "300px"
					}}
				/>
			</p>
			{/* <div className="d-flex justify-content-center mt-3"> */}
			<input
				className="boton-statistics btn btn-primary btn-lg"
				type="button"
				value="Statistics"
				onClick={async () => {
					history.push("/barchart");
				}}
			/>

			<input
				className="boton-questions btn btn-primary btn-lg mx-3"
				type="button"
				value="Visitor"
				onClick={async () => {
					history.push("/questions");
				}}
			/>

			<input
				className="boton-test btn btn-primary btn-lg"
				type="button"
				value="Log out"
				onClick={async () => {
					actions.login(email, password);
				}}
			/>
		</div>
	);
};
