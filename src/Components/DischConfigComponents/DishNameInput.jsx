import React, { useState, useMemo } from "react";
//=============================================
import { Grid, TextField } from "@mui/material/";
//=============================================
import { useDispatch, useSelector } from "react-redux";
//=============================================

const DishNameInput = ({ setConfiguredDish, configuredDish }) => {
	const allDishes = useSelector((state) => state.dishes);
	const [helperTextInfo, setHelperTextInfo] = useState("");
	const [validate, setValidate] = useState();

	const checkIfTheNameOfTheDishIsUnique = () => {
		console.log(allDishes);
		console.log(configuredDish.name);

		const testArray = ["aaaaa", "bbbbb", "ccccc"];
		if (configuredDish.name.length > 2) {
			let nameWasUsed = allDishes.includes(configuredDish.name);
			console.log("test");
			console.log(nameWasUsed);
		}
	};

	const validateInputAndSetNameInConfiguredDish = () => {
		if (configuredDish.name === "") {
			setValidate(true);
			setHelperTextInfo("Pole nazwy nie może być puste");
		} else if (configuredDish.name.length < 3) {
			setValidate(true);
			setHelperTextInfo("Nazwa jest zbyt krótka");
		}
		// else if () {

		// }
		else {
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
				checkIfTheNameOfTheDishIsUnique();
			}}
		/>
	);
};

export default DishNameInput;
