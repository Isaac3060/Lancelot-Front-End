import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { Redirect, useHistory, useParams } from "react-router-dom";

export const StepAge = function() {
	const history = useHistory();
	const [ageRange, setAgeRange] = useState(null);

	return (
		<>
			<div className="container d-flex flex-column h-100 justify-content-center">
				<h3>What is your age?</h3>
				<div className="custom-control custom-radio">
					<input
						onClick={e => setAgeRange(e.target.value)}
						value="18-29"
						type="radio"
						name="radioDisabled"
						id="customRadioDisabled1"
						className="custom-control-input"
					/>
					<label className="custom-control-label" htmlFor="customRadioDisabled1">
						18-29
					</label>
				</div>
				<div className="custom-control custom-radio">
					<input
						onClick={e => setAgeRange(e.target.value)}
						value="30-39"
						type="radio"
						name="radioDisabled"
						id="customRadioDisabled2"
						className="custom-control-input"
					/>
					<label className="custom-control-label" htmlFor="customRadioDisabled2">
						30-39
					</label>
				</div>
				<div className="custom-control custom-radio">
					<input
						onClick={e => setAgeRange(e.target.value)}
						value="40-49"
						type="radio"
						name="radioDisabled"
						id="customRadioDisabled3"
						className="custom-control-input"
					/>
					<label className="custom-control-label" htmlFor="customRadioDisabled3">
						40-49
					</label>
				</div>
				<div className="custom-control custom-radio">
					<input
						onClick={e => setAgeRange(e.target.value)}
						value="50-59"
						type="radio"
						name="radioDisabled"
						id="customRadioDisabled4"
						className="custom-control-input"
					/>
					<label className="custom-control-label" htmlFor="customRadioDisabled4">
						50-59
					</label>
				</div>
				<div className="custom-control custom-radio">
					<input
						onClick={e => setAgeRange(e.target.value)}
						value="60-64"
						type="radio"
						name="radioDisabled"
						id="customRadioDisabled5"
						className="custom-control-input"
					/>
					<label className="custom-control-label" htmlFor="customRadioDisabled5">
						60-64
					</label>
				</div>
				<div className="custom-control custom-radio">
					<input
						onClick={e => setAgeRange(e.target.value)}
						value="65-69"
						type="radio"
						name="radioDisabled"
						id="customRadioDisabled6"
						className="custom-control-input"
					/>
					<label className="custom-control-label" htmlFor="customRadioDisabled6">
						65-69
					</label>
				</div>
				<div className="custom-control custom-radio">
					<input
						onClick={e => setAgeRange(e.target.value)}
						value="70-79"
						type="radio"
						name="radioDisabled"
						id="customRadioDisabled7"
						className="custom-control-input"
					/>
					<label className="custom-control-label" htmlFor="customRadioDisabled7">
						70-79
					</label>
				</div>
				<div className="custom-control custom-radio">
					<input
						onClick={e => setAgeRange(e.target.value)}
						value="80+"
						type="radio"
						name="radioDisabled"
						id="customRadioDisabled8"
						className="custom-control-input"
					/>
					<label className="custom-control-label" htmlFor="customRadioDisabled8">
						80+
					</label>
				</div>
				<button onClick={() => history.push("/questions/3")} type="button" className="btn btn-primary">
					Next
				</button>
			</div>
		</>
	);
};
