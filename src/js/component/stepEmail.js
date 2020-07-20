import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { Redirect, useHistory, useParams } from "react-router-dom";

export const StepEmail = () => {
	const history = useHistory();
	return (
		<>
			<div className="container d-flex flex-column h-100 justify-content-center">
				<div className="col d-flex justify-content-center">
					<div className="col-1" />
					<form className="justify-content-center">
						<div className="form-group">
							<label htmlFor="inputEmail">Email Address</label>
							<input type="name" className="form-control" id="inputEmail" placeholder />
						</div>
						<button onClick={() => history.push("/questions/1")} type="button" className="btn btn-primary">
							Next
						</button>
					</form>
				</div>
			</div>
		</>
	);
};
