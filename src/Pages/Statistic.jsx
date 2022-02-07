import React, { useState } from "react";
//=============================================
import { Container, Grid } from "@mui/material/";
//=============================================
import Header from "../Components/Header/Header";
import Table from "../Components/Table/Table";
import SelectDate from "../Components/SelectDate/SelectDate";
import CalorieCounter from "../Components/CalorieCounter/CalorieCounter";
import BottomNav from "../Components/BottomNav/BottomNav";
import SortStatistic from "../Components/Sort/SortStatistic/SortStatistic";
//=============================================

const Statistic = () => {
	const [dateSelected, setDateSelected] = useState([]);

	return (
		<>
			<Container maxWidth="lg">
				<Header title="Statystyki" size={20} variant="h2" />
				<CalorieCounter dataToCount={dateSelected} />
				<Grid container mt={1} justifyContent="space-between">
					<SelectDate
						setDateSelected={setDateSelected}
						dateSelected={dateSelected}
					/>
					<SortStatistic
						setDataSelected={setDateSelected}
						dataSelected={dateSelected}
					/>
				</Grid>

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
