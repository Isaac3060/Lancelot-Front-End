import React from "react";

export const NextQuestion = () => {
	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-4" />
				<form>
					<div className="form-group">
						<label htmlFor="inputName1">First Name</label>
						<input
							type="name"
							className="form-control"
							id="inputName1"
							// aria-describedby="emailHelp"
							placeholder
						/>
						<label htmlFor="inputName2">Last Name</label>
						<input
							type="name"
							className="form-control"
							id="inputName2"
							// aria-describedby="emailHelp"
							placeholder
						/>
						<label htmlFor="inputAddress">Address</label>
						<input
							type="name"
							className="form-control"
							id="inputAddress"
							// aria-describedby="emailHelp"
							placeholder
						/>
						<label htmlFor="inputPhoneNumber">Phone Number</label>
						<input
							type="name"
							className="form-control"
							id="inputPhoneNumber"
							// aria-describedby="emailHelp"
							placeholder
						/>
					</div>
					<button type="button" className="btn btn-primary">
						Next
					</button>
				</form>
			</div>
		</div>
	);
};
