import React, { useState, useEffect } from "react";
//=============================================
import { TextField } from "@mui/material/";
//=============================================
import { useSelector } from "react-redux";
//=============================================

const DishNameInput = ({ setConfiguredDish, configuredDish }) => {
	const allDishes = useSelector((state) => state.dishes);

	const [helperTextInfo, setHelperTextInfo] = useState("");
	const [validate, setValidate] = useState();

	const checkIfTheNameOfTheDishIsUnique = () => allDishes.some((dish) => dish.name.toUpperCase() === configuredDish.name.toUpperCase());

	const validateInputAndSetNameInConfiguredDish = () => {
		if (configuredDish.name === "") {
			setValidate(true);
			setHelperTextInfo("Pole nazwy nie może być puste");
		} else if (configuredDish.name.length < 3) {
			setValidate(true);
			setHelperTextInfo("Nazwa jest zbyt krótka");
		} else if (checkIfTheNameOfTheDishIsUnique() === true) {
			setValidate(true);
			setHelperTextInfo("Danie o tej nazwie już istnieje");
		} else {
			setValidate(false);
			setHelperTextInfo("Ok");
		}
	};

	return (
		<TextField
			onChange={(e) => {
				setConfiguredDish((prevState) => ({ ...prevState, name: e.target.value }));
				validateInputAndSetNameInConfiguredDish();
			}}
			sx={{
				marginBottom: "20px",
				maxWidth: "340px",
				borderColor: "green",
				borderWidth: 2,
			}}
			size="small"
			value={configuredDish.name}
			id="outlined-multiline-flexible"
			label="Wpisz nazwę dania"
			helperText={helperTextInfo}
			variant="outlined"
			error={validate}
			onBlur={() => {
				validateInputAndSetNameInConfiguredDish();
			}}
		/>
	);
};

export default DishNameInput;
