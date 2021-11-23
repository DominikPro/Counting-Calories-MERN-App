import React from "react";
//=============================================
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
//=============================================
import Container from "@mui/material/Container";
import Header from "../Components/Header/Header";
//=============================================

const Settings = () => {
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
							id="filled-basic"
							label="Imię:"
							variant="filled"
							fullWidth
							required
						/>
						<TextField
							id="filled-basic"
							label="Waga:"
							variant="filled"
							fullWidth
							required
						/>
						<TextField
							id="filled-basic"
							label="Waga docelowa:"
							variant="filled"
							fullWidth
							required
						/>
					</form>
					<Button variant="contained"> Zapisz </Button>
				</Stack>
			</Container>
		</>
	);
};

export default Settings;
