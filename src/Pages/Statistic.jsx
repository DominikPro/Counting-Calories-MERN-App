import React, { useEffect } from "react";
//=============================================
import Container from "@mui/material/Container";
//=============================================
import { useSelector } from "react-redux";
//=============================================
import Header from "../Components/Header/Header";
import Table from "../Components/Table/Table";
//=============================================

const Statistic = () => {
	const data = useSelector((state) => state.calories);

	const distinctDate = [...new Set(data.map((item) => item.date))];
	useEffect(() => {
		console.log(distinctDate);
	}, [data]);

	return (
		<>
			<Container maxWidth="lg">
				<Header title="Statystyki" size={20} />
				<Table
					data={data}
					col1Title="Nazwa"
					col2Title="Porcja"
					col3Title="Kcl w 110 g/ml"
					col4Title="Ilość kalorii"
					col5Title="Uwagi"
					col6Title="Data"
					col7Title="Edytcja"
				/>
			</Container>
		</>
	);
};

export default Statistic;
