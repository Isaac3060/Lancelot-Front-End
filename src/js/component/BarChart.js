import React from "react";
import { LineChart, Line } from "recharts";
const data = [{ name: "Page A", uv: 400, pv: 2400, amt: 2400 }, { name: "Page E", uv: 500, pv: 2500, amt: 2500 }];

const RenderLineChart = () => (
	<LineChart width={400} height={400} data={data}>
		<Line type="monotone" dataKey="uv" stroke="#8884d8" />
	</LineChart>
);
export default RenderLineChart;
