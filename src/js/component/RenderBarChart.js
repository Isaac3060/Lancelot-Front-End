import React, { useContext, useEffect } from "react";
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer } from "recharts";
import { Context } from "../store/appContext";

const RenderBarChart = () => {
    const { store, actions } = useContext(Context);
    useEffect
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

// const data = [{ name: "Page A", uv: 400, pv: 2400, amt: 2400 }, { name: "Page E", uv: 500, pv: 2500, amt: 2500 }];

// const RenderLineChart = () => (
// 	<LineChart width={400} height={400} data={data}>
// 		<Line type="monotone" dataKey="uv" stroke="#8884d8" />
// 	</LineChart>
// );
export default RenderBarChart;
