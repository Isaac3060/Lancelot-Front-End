import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const StepFever = () => {
	const history = useHistory();
	return (
		<>
			<div className="fever container d-flex justify-content-center">
				<p>
					Our Test has shown that you may have fever. Fortunately you have no COVID-19 symptoms. Nonetheless,
					we recommend to stay at least 6 feet (about two arms length) from other people. Keeping distance
					from others is especially important for people who are at higher risk of getting very sick.
				</p>
				<div className="d-flex justify-content-center">
					<Link to="/questions/0">
						<button className="boton-begin btn btn-primary ">Begin new test</button>
					</Link>
					<Link to="/">
						<button className="boton-out-statistics btn btn-primary ml-2 ">Home</button>
					</Link>
				</div>
			</div>
		</>
	);
};
