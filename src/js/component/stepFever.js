import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const StepFever = () => {
	const history = useHistory();
	return (
		<>
			<div className="fever container d-flex flex-column  mt-5 px-5 py-5 justify-content-center">
				<p className="d-flex flex-column justify-content-center">
					Our Test has shown that you may have fever. Fortunately you have no COVID-19 symptoms. Nonetheless,
					we recommend to stay at least 6 feet (about two arms length) from other people. Keeping distance
					from others is especially important for people who are at higher risk of getting very sick.
				</p>
			</div>
			<div className="row flex-column justify-content-between ">
				<div className="d-flex justify-content-center">
					<input
						className="boton-begin-test btn btn-primary btn-lg my-4"
						type="button"
						value="Next visitor"
						onClick={async () => {
							history.push("/questions/0");
						}}
					/>

					<input
						className="boton-begin-test btn btn-primary btn-lg my-4"
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
