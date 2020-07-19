import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { Redirect, useHistory, useParams } from "react-router-dom";

export const StepHealthInfo = () => {
	const history = useHistory();
	return (
		<>
			<div className=" salud container">
				<div className="VmqK7" jsname="D1hwXd">
					<div jsname="UKZ16d" className="QwaZpd">
						<div jscontroller="ijhCJc" jsname="UCjWBd">
							<div className="jYavfc  ">
								<div className="je4IUc">
									<div jsname="G87LWd">
										<div>
											<img
												src="https://www.gstatic.com/images/icons/material/system_gm/2x/report_problem_covid_red_48dp.png"
												alt="report problem"
												style={{
													height: "3rem",
													width: "3rem"
												}}
												data-iml="79073346.79"
											/>
											<h3>Do you have any of these life-threatening symptoms?</h3>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div jsname="UKZ16d" className="QwaZpd">
						<div jscontroller="ijhCJc" jsname="UCjWBd">
							<div className="jYavfc TOxkEd ">
								<div className="je4IUc">
									<div jsname="G87LWd" />
									<ul>
										<li>Bluish lips or face</li>
										<li>Severe and constant pain or pressure in the chest</li>
										<li>
											Extreme difficulty breathing (gasping for air or cannot talk without
											catching your breath)
										</li>
										<li>Severe and constant dizziness or lightheadedness</li>
										<li>Serious disorientation (acting confused)</li>
										<li>Unconscious or very difficult to wake up</li>
										<li>Slurred speech (new or worsening)</li>
										<li>Seizures</li>
										<li>
											Signs of low blood pressure (too weak to stand, light headed, feeling cold,
											pale, clammy skin)
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="botones  mx-auto justify-content-around">
				<input
					className="btn btn-primary btn-lg my-4"
					type="button"
					value="Yes"
					// onClick={async () => {
					// history.push("/questions/4");
				/>
				<input
					className="btn btn-primary btn-lg my-4"
					type="button"
					value="No"
					// onClick={async () => {
					// history.push("/questions/4");
				/>
			</div>
		</>
	);
};
