import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext.js";
import { Redirect } from "react-router-dom";

export const Private = () => {
	const { actions, store } = useContext(Context);
	return (
		<div className="text-center mt-5">
			{!store.token ? <Redirect to="/login" /> : ""}
			<h1>Hello Rigo!</h1>
			<p>you are logedd in</p>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button, bootstrap is working
			</a>
		</div>
	);
};