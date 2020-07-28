import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import RenderBarChart from "../component/RenderBarChart";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Barchart = () => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<div className="navbar navbar-light bg-light mb-3">
				<div className="d-flex justify-content-end ml-auto">
					<Link to="/private">
						<button className="boton-back-statistics btn btn-primary ">Back</button>
					</Link>
					<Link to="/">
						<button className="boton-home-statistics btn btn-primary ml-2 ">Sign out</button>
					</Link>
				</div>
			</div>
			<div className="col-6 mx-auto">
				<RenderBarChart />
			</div>
		</div>
	);
};
