import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { StepEmail } from "../component/stepEmail.js";
import { StepAge } from "../component/stepAge.js";
import { StepBasicInfo } from "../component/stepBasicInfo.js";
import { StepAttention } from "../component/stepAttention.js";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { TestView } from "./test.js";
import { StepHealthInfo } from "../component/stepHealthInfo.js";
import { StepFever } from "../component/stepFever.js";
import { StepNoFever } from "../component/stepNoFever.js";

const steps = {
	0: StepEmail,
	1: StepBasicInfo,
	2: StepAge,
	3: StepHealthInfo,
	4: TestView,
	5: StepAttention,
	6: StepFever,
	7: StepNoFever
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
