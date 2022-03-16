import React from "react";
//=============================================
import { v4 as uuidv4 } from "uuid";
//=============================================
import { Grid, Button } from "@mui/material/";
import NewsArticul from "../NewsArticul/NewsArticul";
//=============================================

const AddDish = ({ setConfiguredDish, setStartOfTheDishConfiguration }) => {
	const handleStartDishConfiguration = () => {
		setStartOfTheDishConfiguration(true);
		setConfiguredDish((prevState) => ({ ...prevState, id: uuidv4() }));
	};
	return (
		<Grid item xs={12} mt={"35px"} container direction="column" justifyContent="center" alignItems="center">
			<Grid item>
				<Button onClick={() => handleStartDishConfiguration()} size="small" variant="contained">
					Stwórz danie
				</Button>
			</Grid>
			<Grid item>
				<NewsArticul />
			</Grid>
		</Grid>
	);
};
export default AddDish;
