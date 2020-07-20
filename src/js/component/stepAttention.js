import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { Redirect, useHistory, useParams } from "react-router-dom";

export const StepAttention = () => {
	const history = useHistory();
	return (
		<>
			<div className=" attention container justify-center">
				<div>
					<img
						src="https://www.gstatic.com/images/icons/material/system_gm/2x/report_problem_covid_red_48dp.png"
						alt="report problem"
						style={{
							height: "3rem",
							width: "3rem"
						}}
					/>
					<h3>Medical attention may be needed!</h3>
				</div>
				<div className="consejos" />
				<p>You made need to call 911 all call ahead to your local</p>
				<p> Emergency facility, notify the operator that you are</p>
				<p> seeking care for someone who has or may have COVID-19</p>
				<h2>Also</h2>

				<ul>
					<li>Put distance between yourself and other people outside of your home.</li>
					<li>Stay at least 6 feet (about two arms length) from other people.</li>
					<li>
						Keeping distance from other is especially important for people who are at higher risk of getting
						very sick.
					</li>
				</ul>
				<p>
					For more information on how to protect yourself and others please visit{" "}
					<a href="https://miro.com/app/board/o9J_kqDHfKE=/?moveToWidget=3074457348530618811&cot=1" />
				</p>
			</div>
		</>
	);
};
