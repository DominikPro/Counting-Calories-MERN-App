import React from "react";
//=============================================
import { useDispatch, useSelector } from "react-redux";
import { updateData, removeData } from "../Redux/actions/SettingsActions";
//=============================================
import { Stack, TextField, Button, Grid } from "@mui/material/";
//=============================================
import Container from "@mui/material/Container";
import Header from "../Components/Header/Header";
import WightInput from "../Components/WightList/WightInput";
//=============================================

const Settings = () => {
	const dispatch = useDispatch();
	const userData = useSelector((state) => state.userSettings);

	return (
		<>
			<Container maxWidth="lg">
				<Header title="O Tobie" size={20} />
			</Container>
			<Grid mt={1} justifyContent="center" container spacing={1}>
				<Grid item xs={5} alignItems="center" justifyContent="center">
					<Header title="Dane użytkownika" size={18} />
					<Container maxWidth="xs">
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
										dispatch(
											updateData(
												e.target
											)
										)
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
									value={
										userData.dailyAmountOfCalories
									}
									onChange={(e) =>
										dispatch(
											updateData(
												e.target
											)
										)
									}
									style={{
										marginBottom: "10px",
									}}
									name="dailyAmountOfCalories"
									id="filled-basic"
									label="Dzienna ilość kalorii:"
									variant="outlined"
									fullWidth
									required
								/>
								<TextField
									value={userData.weight}
									onChange={(e) =>
										dispatch(
											updateData(
												e.target
											)
										)
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
										dispatch(
											updateData(
												e.target
											)
										)
									}
									name="finalWeight"
									id="filled-basic"
									label="Waga docelowa:"
									variant="outlined"
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
				</Grid>
				<Grid item maxWidth="xs" xs={5} alignItems="center" justifyContent="center">
					<WightInput />
				</Grid>
			</Grid>
		</>
	);
};

export default Settings;
