import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext.js";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import lancelot from "../../img/Lancelot.png";

export const Private = () => {
	const { actions, store } = useContext(Context);
	return (
		<div className="text-center mt-5">
			{!store.token ? <Redirect to="/login" /> : ""}
			<h1>Hello you are logedd in!</h1>

			<p>
				<img src={lancelot} />
			</p>
			<Link to="/barchart" className="btn btn-success">
				Barchart
			</Link>
			<Link to="/questions" className="btn btn-success">
				Questions
			</Link>
		</div>
	);
};
