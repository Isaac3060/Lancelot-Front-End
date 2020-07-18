import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { StepEmail } from "../component/stepEmail.js";
import { StepAge } from "../component/stepAge.js";
import { StepBasicInfo } from "../component/stepBasicInfo.js";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { TestView } from "./test.js";

const steps = {
	0: StepEmail,
	3: StepAge,
	2: StepBasicInfo,
	1: TestView
};

export const Questions = function() {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	const params = useParams();
	const CurrentView = steps[params.currentstep || 0];
	console.log("Refrescando el componente", params);
	return (
		<>
			{!store.token ? <Redirect to="/login" /> : ""}
			<CurrentView />
		</>
	);
};
