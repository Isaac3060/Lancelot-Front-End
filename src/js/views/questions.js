import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Redirect } from "react-router-dom";

export const Questions = function() {
	return (
		<>
			{store.token ? <Redirect to="/private" /> : ""}
			<div className="container">
				<div className="custom-control custom-radio">
					<input
						type="radio"
						id="radio1"
						name="radioDisabled"
						id="customRadioDisabled1"
						className="custom-control-input"
						disabled
					/>
					<label className="custom-control-label" htmlFor="customRadioDisabled1">
						18-29
					</label>
				</div>
				<div className="custom-control custom-radio">
					<input
						type="radio"
						id="radio2"
						name="radioDisabled"
						id="customRadioDisabled2"
						className="custom-control-input"
						disabled
					/>
					<label className="custom-control-label" htmlFor="customRadioDisabled2">
						30-39
					</label>
				</div>
				<div className="custom-control custom-radio">
					<input
						type="radio"
						id="radio3"
						name="radioDisabled"
						id="customRadioDisabled3"
						className="custom-control-input"
						disabled
					/>
					<label className="custom-control-label" htmlFor="customRadioDisabled3">
						40-49
					</label>
				</div>
				<div className="custom-control custom-radio">
					<input
						type="radio"
						id="radio4"
						name="radioDisabled"
						id="customRadioDisabled4"
						className="custom-control-input"
						disabled
					/>
					<label className="custom-control-label" htmlFor="customRadioDisabled4">
						50-59
					</label>
				</div>
				<div className="custom-control custom-radio">
					<input
						type="radio"
						id="radio5"
						name="radioDisabled"
						id="customRadioDisabled5"
						className="custom-control-input"
						disabled
					/>
					<label className="custom-control-label" htmlFor="customRadioDisabled5">
						60-64
					</label>
				</div>
				<div className="custom-control custom-radio">
					<input
						type="radio"
						id="radio6"
						name="radioDisabled"
						id="customRadioDisabled6"
						className="custom-control-input"
						disabled
					/>
					<label className="custom-control-label" htmlFor="customRadioDisabled6">
						65-69
					</label>
				</div>
				<div className="custom-control custom-radio">
					<input
						type="radio"
						id="radio7"
						name="radioDisabled"
						id="customRadioDisabled7"
						className="custom-control-input"
						disabled
					/>
					<label className="custom-control-label" htmlFor="customRadioDisabled7">
						70-79
					</label>
				</div>
				<div className="custom-control custom-radio">
					<input
						type="radio"
						id="radio8"
						name="radioDisabled"
						id="customRadioDisabled8"
						className="custom-control-input"
						disabled
					/>
					<label className="custom-control-label" htmlFor="customRadioDisabled8">
						80+
					</label>
				</div>
			</div>
		</>
	);
};
