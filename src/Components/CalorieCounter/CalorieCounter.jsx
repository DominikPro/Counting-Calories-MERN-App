import React, { useState, useEffect } from "react";
//==========================================
import { useSelector } from "react-redux";
//==========================================
import { Grid, Typography, Divider } from "@mui/material/";
//==========================================

const CalorieCounter = ({ dataToCount }) => {
	const userCalorieLimit = useSelector((state) => state.userSettings.dailyAmountOfCalories);
	useEffect(() => {
		sumCalorieFormData();
	}, [dataToCount]);
	const [sumCalorie, setSumCalorie] = useState(0);

	const sumCalorieFormData = () => {
		let sumCalorie = 0;
		dataToCount.map((item) => {
			sumCalorie += Math.round((item.defaultPortion / 100) * item.caloriesIn100);
		});
		setSumCalorie(sumCalorie);
	};

	return (
		<>
			<Grid container justifyContent="center" alignItems="center" item xs={12}>
				<Grid item xs={3}>
					<Typography variant="h6">{`Limit kalorii ${userCalorieLimit}`}</Typography>
				</Grid>
				<Grid item xs={3}>
					<Typography variant="h6">{`Dostępne kalorie ${
						userCalorieLimit - sumCalorie
					}`}</Typography>
				</Grid>
				<Grid item xs={3}>
					<Typography variant="h6">{`Przyjęte kalorie ${sumCalorie}`}</Typography>
				</Grid>
				<Divider />
			</Grid>
		</>
	);
};

export default CalorieCounter;
