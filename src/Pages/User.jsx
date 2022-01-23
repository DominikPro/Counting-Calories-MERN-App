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
import { useEffect } from "react";
//=============================================

const Settings = () => {
	const dispatch = useDispatch();
	const userData = useSelector((state) => state.userSettings);
	const [validationError, setValidationError] = useState();

	const handleChange = (e) => {
		dispatch(updateData(e.target));
	};

	useEffect(() => {
		if (userData.dailyAmountOfCalories === 0 || userData.dailyAmountOfCalories === "") {
			setValidationError(true);
		} else if (userData.dailyAmountOfCalories > 0) {
			setValidationError(false);
		}
	}, [userData]);

	return (
		<>
			<Container maxWidth="lg">
				<Header title="O Tobie" size={25} />
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
					<Header title="Dane użytkownika" size={18} />

					<Stack
						direction="column"
						justifyContent="flex-start"
						alignItems="center"
						spacing={2}
					>
						<form noValidate autoComplete="off">
							<TextField
								value={userData.name}
								onChange={(e) =>
									// dispatch(updateData(e.target))
									handleChange(e)
								}
								style={{
									marginBottom: "10px",
								}}
								id="filled-basic"
								name="name"
								label="Imię:"
								variant="outlined"
								fullWidth
								required
							/>
							<TextField
								value={userData.dailyAmountOfCalories}
								onChange={(e) =>
									// dispatch(updateData(e.target))
									handleChange(e)
								}
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
								error={validationError}
							/>
							<TextField
								value={userData.weight}
								onChange={(e) =>
									// dispatch(updateData(e.target))
									handleChange(e)
								}
								style={{
									marginBottom: "10px",
								}}
								name="weight"
								id="filled-basic"
								label="Waga początkowa:"
								variant="outlined"
								fullWidth
								required
							/>
							<TextField
								value={userData.finalWeight}
								onChange={(e) =>
									// dispatch(updateData(e.target))
									handleChange(e)
								}
								name="finalWeight"
								id="filled-basic"
								label="Waga docelowa:"
								variant="outlined"
								fullWidth
								required
							/>
							<Header
								title="Zmianyzapisywane są automatycznie"
								size={14}
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
