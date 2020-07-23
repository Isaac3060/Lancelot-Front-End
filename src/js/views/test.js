import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Redirect, useHistory } from "react-router-dom";
export const TestView = function() {
	const { actions, store } = useContext(Context);
	const [loading, setLoading] = useState(false);
	const history = useHistory();
	return (
		<div>
			{!store.token ? <Redirect to="/login" /> : ""}
			<div className="container w-100 pt-5">
				<div className="form-min-height rounded-lg py-2 mx-auto border border-secondary mt-5">
					{store.visit.temperature && store.visit.temperature != "" ? (
						<>
							{store.visit.temperature > 98 ? (
								<Redirect to="/questions/6" />
							) : (
								<Redirect to="/questions/7" />
							)}
						</>
					) : (
						<>
							{!loading ? (
								<React.Fragment>
									<div className="camera-icon" />
									<div className="buttons flex-column d-flex mx-auto justify-content-around">
										<input
											className="btn btn-primary btn-lg my-4"
											type="button"
											value="Take Test"
											onClick={async () => {
												setLoading(true);
												let temperature = await actions.getTemperature();
											}}
										/>
										<input
											className="btn btn-primary btn-lg my-4"
											type="button"
											value="Back"
											onClick={async () => {
												history.push("/questions/4");
											}}
										/>
									</div>
								</React.Fragment>
							) : (
								<React.Fragment>
									<div className="shield-icon my-4 d-flex justify-content-center align-items-center">
										<div className="lds-ripple">
											<div />
											<div />
										</div>
									</div>
								</React.Fragment>
							)}
						</>
					)}
				</div>
			</div>
		</div>
	);
};
