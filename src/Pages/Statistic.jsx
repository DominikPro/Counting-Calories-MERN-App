import React, { useState } from "react";
//=============================================
import { Container, Grid } from "@mui/material/";
//=============================================
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { removeCaloris } from "../Redux/actions/caloriesActions";
//=============================================
import Header from "../Components/Header/Header";
import Table from "../Components/Table/Table";
import SelectDate from "../Components/SelectDate/SelectDate";
import CalorieCounter from "../Components/CalorieCounter/CalorieCounter";
import GoToButton from "../Components/GoToButton/GoToButton";
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
				{/* <CalorieCounter dataToCount={dateSelected} /> */}
				<Table
					data={dateSelected}
					col1Title="Nazwa"
					col2Title="Porcja"
					col3Title="Kcl w 110 g/ml"
					col4Title="Ilość kalorii"
					col5Title="Uwagi"
					col6Title="Data"
					col7Title="Edytcja"
				/>
				{/* <Grid container justifyContent="center">
					<Grid item xs={2}>
						<GoToButton
							goToButtonName="Dodaj Kalorie"
							to="/addCalorie"
						/>
					</Grid>
					<Grid item xs={2}>
						<GoToButton
							goToButtonName="Dodaj nowy prodkut"
							to="/addProduct"
						/>
					</Grid>
				</Grid> */}
				<BottomNav pageName="statistic" />
			</Container>
		</>
	);
};

export default Statistic;
