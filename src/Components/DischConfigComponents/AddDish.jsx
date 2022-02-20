import React from "react";
//=============================================
import { v4 as uuidv4 } from "uuid";
//=============================================
import { Grid, Button } from "@mui/material/";
//=============================================

const AddDish = ({ setConfiguredDish, setStartOfTheDishConfiguration }) => {
	const handleStartDishConfiguration = () => {
		setStartOfTheDishConfiguration(true);
		setConfiguredDish((prevState) => ({ ...prevState, dishId: uuidv4() }));
	};
	return (
		<Grid xs={12} container direction="row" justifyContent="center" alignItems="center">
			<Grid item>
				<Button
					onClick={() => handleStartDishConfiguration()}
					size="small"
					variant="outlined"
				>
					Stwórz danie
				</Button>
			</Grid>
		</Grid>
	);
};
export default AddDish;
