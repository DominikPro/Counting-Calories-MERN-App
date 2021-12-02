import React, { useState } from "react";
//=============================================
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
//=============================================
import Container from "@mui/material/Container";
import Header from "../Components/Header/Header";
//=============================================
import { useDispatch, useSelector } from "react-redux";
import { updateData, removeData } from "../Redux/actions/SettingsActions";
//=============================================

const Settings = () => {
	const dispatch = useDispatch();
	const userData = useSelector((state) => state.userSettings);

	return (
		<>
			<Container maxWidth="lg">
				<Header title="Ustawienia" size={20} />
			</Container>
			<Container maxWidth="sm">
				<Stack
					direction="column"
					justifyContent="flex-start"
					alignItems="center"
					spacing={2}
				>
					<form noValidate autoComplete="off">
						<TextField
							value={userData.name}
							onChange={(e) => dispatch(updateData(e.target))}
							id="filled-basic"
							name="name"
							label="Imię:"
							variant="filled"
							fullWidth
							required
						/>
						<TextField
							value={userData.dailyAmountOfCalories}
							onChange={(e) => dispatch(updateData(e.target))}
							name="dailyAmountOfCalories"
							id="filled-basic"
							label="Dzienna ilość kalorii:"
							variant="filled"
							fullWidth
							required
						/>
						<TextField
							value={userData.weight}
							onChange={(e) => dispatch(updateData(e.target))}
							name="weight"
							id="filled-basic"
							label="Waga:"
							variant="filled"
							fullWidth
							required
						/>
						<TextField
							value={userData.finalWeight}
							onChange={(e) => dispatch(updateData(e.target))}
							name="finalWeight"
							id="filled-basic"
							label="Waga docelowa:"
							variant="filled"
							fullWidth
							required
						/>
					</form>
					<Button
						onClick={() => dispatch(removeData())}
						variant="contained"
						color="error"
					>
						Usuń dane
					</Button>
				</Stack>
			</Container>
		</>
	);
};

export default Settings;
