import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
//==========================================
import { useSelector } from "react-redux";
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

	return (
		<>
			<Grid container justifyContent="center" mt={1} mb={1} alignItems="center" item xs={12}>
				{dataToCount.length > 0 ? (
					<>
						<Divider orientation="vertical" flexItem />
						<Grid item xs={3}>
							<Divider orientation="horizontal" flexItem />
							<Typography
								variant="inherit"
								color="blue"
								align="center"
							>{`Limit kalorii: ${userCalorieLimit} kcl`}</Typography>
							<Divider orientation="horizontal" flexItem />
						</Grid>
						<Divider orientation="horizontal" flexItem />
						<Divider orientation="vertical" flexItem />
						<Grid item xs={3}>
							<Divider orientation="horizontal" flexItem />
							<Typography
								color={
									userCalorieLimit > sumCalorie
										? "green"
										: "red"
								}
								variant="inherit"
								align="center"
							>{`Dostępne kalorie: ${
								userCalorieLimit - sumCalorie
							} kcl`}</Typography>
							<Divider orientation="horizontal" flexItem />
						</Grid>
						<Divider orientation="vertical" flexItem />
						<Grid item xs={3}>
							<Divider orientation="horizontal" flexItem />
							<Typography
								variant="inherit"
								align="center"
							>{`Przyjęte kalorie: ${sumCalorie} kcl`}</Typography>
							<Divider orientation="horizontal" flexItem />
						</Grid>
						<Divider orientation="vertical" flexItem />
					</>
				) : (
					<Typography variant="h6" align="center">
						Brak statysytk dla wybranej daty
					</Typography>
				)}
			</Grid>
		</>
	);
};

CalorieCounter.propTypes = {
	dataToCount: PropTypes.array,
};

export default CalorieCounter;
