import React, { useContext, useEffect } from "react";
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer } from "recharts";
import { Context } from "../store/appContext";

const RenderBarChart = () => {
	const { store, actions } = useContext(Context);
	useEffect;
	return (
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
	);
};

export default RenderBarChart;
