import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext.js";
import { Redirect, Link } from "react-router-dom";
import lancelot from "../../img/Lancelot.png";
import smiley from "../../img/Smiley face.png";

export const Private = () => {
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

			<Link to="/barchart" className="boton-statistics btn btn-primary btn-lg">
				Statistics
			</Link>
			<Link to="/questions" className="boton-questions btn btn-primary btn-lg mx-3">
				Questions
			</Link>
			<Link to="/test" className="boton-test btn btn-primary btn-lg">
				Test
			</Link>
		</div>
	);
};
