import React, { useState } from "react";
//=============================================
import { Grid, TextField } from "@mui/material/";
//=============================================

const DishNameInput = ({ setConfiguredDish }) => {
	const [dishName, setDishName] = useState("");
	const [helperTextInfo, setHelperTextInfo] = useState("");
	const [validate, setValidate] = useState();

	const validateInputAndSetNameInConfiguredDish = () => {
		if (dishName === "") {
			console.log("działa");
			setValidate(true);
			setHelperTextInfo("Pole nazwy nie może być puste");
		} else if (dishName.length < 3) {
			console.log("działa");
			setValidate(true);
			setHelperTextInfo("Nazwa jest zbyt krótka");
		} else {
			setValidate(false);
			setHelperTextInfo("Ok");
			setConfiguredDish((prevState) => ({ ...prevState, dishName: dishName }));
		}
	};

	return (
		<TextField
			onChange={(e) => {
				setDishName(e.target.value);
			}}
			sx={{
				marginBottom: "20px",
				maxWidth: "340px",
				borderColor: "green",
				borderWidth: 2,
			}}
			size="small"
			value={dishName}
			id="outlined-multiline-flexible"
			label="Wpisz nazwę dania"
			helperText={helperTextInfo}
			variant="outlined"
			error={validate}
			onBlur={() => validateInputAndSetNameInConfiguredDish()}
		/>
	);
};

export default DishNameInput;
