import React, { useState } from "react";
//=============================================
import { useDispatch, useSelector } from "react-redux";
import { updateData, removeData } from "../Redux/actions/SettingsActions";
//=============================================
import { Stack, TextField, Button, Grid, Divider } from "@mui/material/";
//=============================================
import Container from "@mui/material/Container";
import Header from "../Components/Header/Header";
import WightInput from "../Components/WightList/WightInput";
import WeightChart from "../Components/WightList/WeightChart/WeightChart";
//=============================================

const Settings = () => {
	const dispatch = useDispatch();
	const userData = useSelector((state) => state.userSettings);

	const [validation, setValidation] = useState({
		name: false,
		dailyAmountOfCalories: false,
		weight: false,
		finalWeight: false,
	});
	const validatInputsOnblure = (e) => {
		const { name, value } = e.target;
		if (name === "name") {
			if (value === "") {
				return setValidation((prevState) => ({ ...prevState, [name]: true }));
			} else setValidation((prevState) => ({ ...prevState, [name]: false }));
		} else if (name === "dailyAmountOfCalories" || name === "weight" || name === "finalWeight") {
			if (value === "" || value < 0) {
				return setValidation((prevState) => ({ ...prevState, [name]: true }));
			} else return setValidation((prevState) => ({ ...prevState, [name]: false }));
		}
	};

	const handleChange = (e) => {
		dispatch(updateData(e.target));
	};

	return (
		<>
			<Container maxWidth="lg">
				<Header title="O Tobie" size={20} variant="h2" />
			</Container>

			<Grid xs={12} mt={1} justifyContent="center" container spacing={1}>
				<Grid
					item
					maxWidth="xs"
					xs={12}
					md={5}
					alignItems="center"
					justifyContent="center"
				>
					<WightInput />
				</Grid>

				<Grid item xs={12} md={5}>
					<WeightChart />
				</Grid>

				<Grid xs={12}>
					<Divider />
				</Grid>
			</Grid>

			<Grid item xs={12} mb={2} alignItems="center" justifyContent="center">
				<Container maxWidth="xs">
					<Header title="Dane użytkownika" size={18} variant="h3" />

					<Stack
						direction="column"
						justifyContent="flex-start"
						alignItems="center"
						spacing={2}
					>
						<form noValidate autoComplete="off">
							<TextField
								value={userData.name}
								onChange={(e) => handleChange(e)}
								style={{
									marginBottom: "10px",
								}}
								id="filled-basic"
								name="name"
								label="Imię:"
								variant="outlined"
								fullWidth
								required
								error={validation.name}
								onBlur={(e) => validatInputsOnblure(e)}
							/>
							<TextField
								value={userData.dailyAmountOfCalories}
								onChange={(e) => handleChange(e)}
								style={{
									marginBottom: "10px",
								}}
								type="number"
								name="dailyAmountOfCalories"
								id="filled-basic"
								label="Dzienny limit kalorii:"
								variant="outlined"
								fullWidth
								required
								error={validation.dailyAmountOfCalories}
								onBlur={(e) => validatInputsOnblure(e)}
							/>
							<TextField
								value={userData.weight}
								onChange={(e) => handleChange(e)}
								style={{
									marginBottom: "10px",
								}}
								name="weight"
								id="filled-basic"
								label="Waga początkowa:"
								variant="outlined"
								fullWidth
								required
								error={validation.weight}
								onBlur={(e) => validatInputsOnblure(e)}
							/>
							<TextField
								value={userData.finalWeight}
								onChange={(e) => handleChange(e)}
								name="finalWeight"
								id="filled-basic"
								label="Waga docelowa:"
								variant="outlined"
								fullWidth
								error={validation.finalWeight}
								onBlur={(e) => validatInputsOnblure(e)}
							/>
							<Header
								title="Zmiany zapisywane są automatycznie"
								size={14}
								variant="h3"
							/>
						</form>
						<Button
							onClick={() => dispatch(removeData())}
							variant="contained"
							color="error"
						>
							Wyczyść dane o użytkowniku
						</Button>
					</Stack>
				</Container>
			</Grid>
		</>
	);
};

export default Settings;
