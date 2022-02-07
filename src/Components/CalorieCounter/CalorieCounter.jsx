import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
//==========================================
import { useSelector } from "react-redux";
//==========================================
import Header from "../Header/Header";
//==========================================
import { Grid, Typography, Divider } from "@mui/material/";
//==========================================

const CalorieCounter = ({ dataToCount }) => {
	const userCalorieLimit = useSelector((state) => state.userSettings.dailyAmountOfCalories);
	const [sumCalorie, setSumCalorie] = useState(0);

	useEffect(() => {
		let sumCalorie = 0;

		dataToCount.map((item) => {
			return (sumCalorie += Math.round((item.defaultPortion / 100) * item.caloriesIn100));
		});
		setSumCalorie(sumCalorie);
	}, [dataToCount]);

	if (userCalorieLimit > 0) {
		return (
			<>
				<Grid
					container
					justifyContent="center"
					mt={1}
					mb={1}
					alignItems="center"
					item
					xs={12}
				>
					{dataToCount.length > 0 ? (
						<>
							<Divider orientation="vertical" flexItem />
							<Grid item xs={3}>
								<Divider
									orientation="horizontal"
									flexItem
								/>
								<Typography
									variant="inherit"
									color="blue"
									align="center"
								>{`Limit kalorii: ${userCalorieLimit} kcl`}</Typography>
								<Divider
									orientation="horizontal"
									flexItem
								/>
							</Grid>
							<Divider orientation="horizontal" flexItem />
							<Divider orientation="vertical" flexItem />
							<Grid item xs={3}>
								<Divider
									orientation="horizontal"
									flexItem
								/>
								<Typography
									color={
										userCalorieLimit >
										sumCalorie
											? "green"
											: "red"
									}
									variant="inherit"
									align="center"
								>{`Dostępne kalorie: ${
									userCalorieLimit - sumCalorie
								} kcl`}</Typography>
								<Divider
									orientation="horizontal"
									flexItem
								/>
							</Grid>
							<Divider orientation="vertical" flexItem />
							<Grid item xs={3}>
								<Divider
									orientation="horizontal"
									flexItem
								/>
								<Typography
									variant="inherit"
									align="center"
								>{`Przyjęte kalorie: ${sumCalorie} kcl`}</Typography>
								<Divider
									orientation="horizontal"
									flexItem
								/>
							</Grid>
							<Divider orientation="vertical" flexItem />
						</>
					) : (
						<Header
							title="Brak statysytk dla wybranej daty"
							variant="h4"
							size={20}
							align="center"
						/>
					)}
				</Grid>
			</>
		);
	} else
		return (
			<Typography sx={{ fontWeight: "bold" }} align="center">
				Wprowadź dzienny limit kalorii w karcie Użykownik, by wyświetlić kalkulację
				kalorii.
			</Typography>
		);
};

CalorieCounter.propTypes = {
	dataToCount: PropTypes.array,
};

export default CalorieCounter;
