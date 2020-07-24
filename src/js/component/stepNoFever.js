import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import { Redirect, useHistory, useParams } from "react-router-dom";

export const StepNoFever = () => {
	const history = useHistory();
	const { store, actions } = useContext(Context);
	return (
		<>
			<div className="d-flex flex-column justify-content-center ">
				<div className="smiley-face mt-5 mb-3" />
				<h3 className="text-center mb-3">Awesome!</h3>
				<div className="d-flex justify-content-center">
					<Link to="/questions/0">
						<button className="boton-begin-test btn btn-primary ">Begin new test</button>
					</Link>
					<Link to="/">
						<button className="boton-sign-out-statistics btn btn-primary ml-2 ">Home</button>
					</Link>
				</div>
			</div>
		</>
	);
};
