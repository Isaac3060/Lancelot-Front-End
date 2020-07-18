import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { Redirect, useHistory, useParams } from "react-router-dom";

export const StepBasicInfo = () => {
	const { actions, store } = useContext(Context);
	const [visitorFirstName, setVisitorFirstName] = useState("");
	const [visitorLastName, setVisitorLastName] = useState("");
	const [age, setAge] = useState("");
	const [address, setAddress] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [email, setEmail] = useState("");
	const history = useHistory();
	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-4">
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
						<button
							className="btn btn-lg btn-primary btn-block"
							type="button"
							onClick={async () => {
								let success = await actions.visitor(
									visitorFirstName,
									visitorLastName,
									age,
									address,
									phoneNumber,
									email
								);
								if (success) {
									history.push("/questions/1");
								} else {
									alert("something went wrong, please try again");
								}
							}}>
							Next
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
