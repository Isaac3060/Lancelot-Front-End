import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Redirect } from "react-router-dom";
export const TestView = function() {
	const { actions, store } = useContext(Context);
	const [loading, setLoading] = useState(false);
	return (
		<div>
			{store.token ? <Redirect to="/login" /> : ""}
			{!loading ? (
				<>
					{store.visit.temperature && store.visit.temperature != "" ? (
						<h1>{store.visit.temperature}</h1>
					) : (
						<input
							type="button"
							value="send"
							onClick={async () => {
								setLoading(true);
								let temperature = await actions.getTemperature();
								setLoading(false);
							}}
						/>
					)}
				</>
			) : (
				<h1>{"loading"}</h1>
			)}
		</div>
	);
};
