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
					<input
						className="boton-begin-test btn btn-primary"
						type="button"
						value="Next visitor"
						onClick={async () => {
							history.push("/questions/0");
						}}
					/>
					<input
						className="boton-sign-out-statistics btn btn-primary ml-2"
						type="button"
						value="Home"
						onClick={async () => {
							history.push("/private");
						}}
					/>
				</div>
			</div>
		</>
	);
};
