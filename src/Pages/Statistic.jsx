import React, { useState } from "react";
//=============================================
import { Container } from "@mui/material/";
//=============================================
import Header from "../Components/Header/Header";
import Table from "../Components/Table/Table";
import SelectDate from "../Components/SelectDate/SelectDate";
import CalorieCounter from "../Components/CalorieCounter/CalorieCounter";
import BottomNav from "../Components/BottomNav/BottomNav";
//=============================================

const Statistic = () => {
	const [dateSelected, setDateSelected] = useState([]);

	return (
		<>
			<Container maxWidth="lg">
				<Header title="Statystyki" size={20} />
				<CalorieCounter dataToCount={dateSelected} />
				<SelectDate setDateSelected={setDateSelected} dateSelected={dateSelected} />

				<Table
					data={dateSelected}
					listType="Statistic"
					col1Title="Nazwa"
					col2Title="Porcja"
					col3Title="Kcl w 110 g/ml"
					col4Title="Ilość kalorii"
					col5Title="Uwagi"
					col6Title="Data"
					col7Title="Edytcja"
				/>

				<BottomNav pageName="statistic" />
			</Container>
		</>
	);
};

export default Statistic;
