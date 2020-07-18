import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { Redirect, useHistory, useParams } from "react-router-dom";

export const StepBasicInfo = () => {
	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-4" />
				<form>
					<div className="form-group">
						<label htmlFor="inputName1">First Name</label>
						<input type="name" className="form-control" id="inputName1" placeholder />
						<label htmlFor="inputName2">Last Name</label>
						<input type="name" className="form-control" id="inputName2" placeholder />
						<label htmlFor="inputAddress">Address</label>
						<input type="name" className="form-control" id="inputAddress" placeholder />
						<label htmlFor="inputPhoneNumber">Phone Number</label>
						<input type="name" className="form-control" id="inputPhoneNumber" placeholder />
					</div>
					<button type="button" className="btn btn-primary">
						Next
					</button>
				</form>
			</div>
		</div>
	);
};
