import React from "react";
//=============================================
import { useSelector } from "react-redux";
//=============================================
import Header from "../../Header/Header";
//=============================================
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
//=============================================

const WeightChart = () => {
	const weightData = useSelector((state) => state.weightReducer);

	return (
		<div>
			{/* <ResponsiveContainer width={300} height={350}> */}
			<Header title={"Wykres zmiany wagi"} size={20} variant="h4" />
			<BarChart
				width={400}
				height={500}
				data={weightData}
				syncId="anyId"
				margin={{
					top: 10,
					right: 30,
					left: 0,
					bottom: 20,
				}}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="date" hide={true} />
				<YAxis />
				<Tooltip />
				<Bar type="monotone" dataKey="weight" stroke="#120d63" fill="#18970c" />
			</BarChart>
			{/* </ResponsiveContainer> */}
		</div>
	);
};

export default WeightChart;
