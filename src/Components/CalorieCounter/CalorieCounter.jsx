import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
//==========================================
import { useSelector } from "react-redux";
//==========================================
import Header from "../Header/Header";
//==========================================
import { Grid, Typography, Divider, Chip } from "@mui/material/";
import MenuIcon from "@mui/icons-material/Menu";
import NetworkLockedIcon from "@mui/icons-material/NetworkLocked";
import KitchenIcon from "@mui/icons-material/Kitchen";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
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
							<Grid
								xs={12}
								container
								justifyContent="space-evenly"
								spacing={1}
							>
								<Grid
									container
									justifyContent="center"
									item
									xs={12}
									md={1}
								>
									<Chip
										sx={{
											boxShadow: 1,
											":hover": {
												boxShadow: 3,
											},
											fontSize: 14,
											minWidth: 230,
										}}
										label={`Limit kalorii: ${userCalorieLimit} kcl`}
										variant="outlined"
										color="primary"
										icon={
											<NetworkLockedIcon />
										}
									/>
								</Grid>

								<Grid
									container
									justifyContent="center"
									item
									xs={12}
									md={1}
								>
									<Chip
										sx={{
											boxShadow: 1,
											":hover": {
												boxShadow: 3,
											},
											fontSize: 14,
											minWidth: 230,
										}}
										label={`Dostępne kalorie: ${
											userCalorieLimit -
											sumCalorie
										} kcl`}
										variant="outlined"
										color="success"
										icon={
											<KitchenIcon />
										}
									/>
								</Grid>

								<Grid
									container
									justifyContent="center"
									item
									xs={12}
									md={1}
								>
									<Chip
										sx={{
											boxShadow: 1,
											":hover": {
												boxShadow: 3,
											},
											fontSize: 14,
											minWidth: 230,
										}}
										label={`Przyjęte kalorie: ${sumCalorie} kcl`}
										variant="outlined"
										color="warning"
										icon={
											<HourglassBottomIcon />
										}
									/>
								</Grid>
							</Grid>
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
