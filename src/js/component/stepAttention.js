import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const StepAttention = () => {
	const history = useHistory();
	return (
		<>
			<div className="container d-flex justify-content-center">
				<div className=" attention">
					<img
						src="https://www.gstatic.com/images/icons/material/system_gm/2x/report_problem_covid_red_48dp.png"
						alt="report problem"
						style={{
							height: "3rem",
							width: "3rem"
						}}
					/>
					<h3>Medical attention may be needed!</h3>

					<div className="consejos" />
					<p>
						You made need to call 911 all call ahead to your local Emergency facility, notify the operator
						that you are seeking care for someone who has or may have COVID-19.
					</p>
					<h2>Also</h2>

					<ul>
						<li>Put distance between yourself and other people outside of your home.</li>
						<li>Stay at least 6 feet (about two arms length) from other people.</li>
						<li>
							Keeping distance from other is especially important for people who are at higher risk of
							getting very sick.
						</li>
					</ul>
					<p>
						For more information on how to protect yourself and others please visit
						{/* {"https://miro.com/app/board/o9J_kqDHfKE=/?moveToWidget=3074457348530618811&cot=1 "} */}
					</p>
					<div className="d-flex justify-content-center">
						<Link to="/questions/0">
							<button className="boton-begin-test btn btn-primary ">Begin new test</button>
						</Link>
						<Link to="/">
							<button className="boton-sign-out-statistics btn btn-primary ml-2 ">Home</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};
