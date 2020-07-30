import React, { useContext, useEffect } from "react";
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer } from "recharts";
import { Context } from "../store/appContext";

const RenderBarChart = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		console.log("fetching");
		actions.getSingleBusiness();
	}, []);
	return (
		<>
			<ResponsiveContainer width={"100%"} height={500}>
				<BarChart data={store.data}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Bar dataKey="positive" fill="#8884d8" />
				</BarChart>
			</ResponsiveContainer>
			<table className="table table-striped">
				<thead>
					<tr>
						<th scope="col">Date</th>
						<th scope="col">Full Name</th>
						<th scope="col">Email</th>
						<th scope="col">Fever</th>
					</tr>
				</thead>
				<tbody>
					{store.singleBusiness &&
						store.singleBusiness.visits.map(visit => {
							return (
								<tr key={visit.id}>
									<td scope="row">{visit.entry_date}</td>
									<td>{`${visit.full_name}`}</td>
									<td>{visit.visitor_email}</td>
									<td>{visit.has_fever ? "yes" : "no"}</td>
								</tr>
							);
						})}
				</tbody>
			</table>
		</>
	);
};

export default RenderBarChart;
