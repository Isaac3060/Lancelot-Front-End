import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const StepFever = () => {
	const history = useHistory();
	return (
		<>
			<div className="fever container d-flex flex-column  mt-5 px-5 py-5 justify-content-center">
				<p>
					Our Test has shown that you may have fever. Fortunately you have no COVID-19 symptoms. Nonetheless,
					we recommend to stay at least 6 feet (about two arms length) from other people. Keeping distance
					from others is especially important for people who are at higher risk of getting very sick.
				</p>
				<div className="row flex-column justify-content-between ">
					S
					<div className="d-flex justify-content-center">
						<Link to="/questions/0">
							<button className="boton-begin-test btn btn-primary ">Next visitor</button>
						</Link>
					</div>
					<div className="d-flex justify-content-center mt-3">
						<Link to="/private">
							<button className="boton-sign-out btn btn-primary">Home</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};
