import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { StepEmail } from "../component/stepEmail.js";
import { StepAge } from "../component/stepAge.js";
import { StepBasicInfo } from "../component/stepBasicInfo.js";
import { Redirect, useHistory, useParams } from "react-router-dom";

const steps = {
	0: StepEmail,
	1: StepAge,
	2: StepBasicInfo
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
