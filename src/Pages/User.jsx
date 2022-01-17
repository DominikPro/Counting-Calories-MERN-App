import React from "react";
//=============================================
import { useDispatch, useSelector } from "react-redux";
import { updateData, removeData } from "../Redux/actions/SettingsActions";
//=============================================
import { Stack, TextField, Button, Grid } from "@mui/material/";
//=============================================
import Container from "@mui/material/Container";
import Header from "../Components/Header/Header";
import WightList from "../Components/WightList/WightList";
//=============================================

const Settings = () => {
	const dispatch = useDispatch();
	const userData = useSelector((state) => state.userSettings);

	return (
		<>
			<Container maxWidth="lg">
				<Header title="O Tobie" size={20} />
			</Container>
			<Grid mt={2} justifyContent="center" container spacing={1}>
				<Grid item xs={5} alignItems="center" justifyContent="center">
					<Header title="Dane użytkownika" size={18} />
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
									onChange={(e) =>
										dispatch(
											updateData(
												e.target
											)
										)
									}
									id="filled-basic"
									name="name"
									label="Imię:"
									variant="filled"
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
									name="dailyAmountOfCalories"
									id="filled-basic"
									label="Dzienna ilość kalorii:"
									variant="filled"
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
									name="weight"
									id="filled-basic"
									label="Waga początkowa:"
									variant="filled"
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
				</Grid>
				<Grid item maxWidth="xs" xs={5} alignItems="center" justifyContent="center">
					<WightList />
				</Grid>
			</Grid>
		</>
	);
};

export default Settings;
