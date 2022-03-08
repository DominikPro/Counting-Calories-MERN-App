import React, { useState } from "react";
//=============================================
import { validateDish } from "./validation";
import { Typography, Grid, Paper, Box, Button, IconButton } from "@mui/material/";
//=============================================
import { useDispatch, useSelector } from "react-redux";
import { addDish } from "../../Redux/actions/dishActions";
//=============================================

const ButtonSaveDish = ({ configuredDish, setConfiguredDish }) => {
	const dispatch = useDispatch();

	const setEmptyStateInDishConfiguration = () => {
		setConfiguredDish({
			listType: "Dish",
			name: "",
			id: "",
			caloriesIn100: "",
			products: [],
		});
	};

	const handleDispatchDish = () => {
		if (validateDish(configuredDish)) {
			return dispatch(addDish(configuredDish)), setEmptyStateInDishConfiguration();
		}
	};

	return (
		<Button variant="contained" size="small" onClick={() => handleDispatchDish()}>
			Zapisz
		</Button>
	);
};
export default ButtonSaveDish;
