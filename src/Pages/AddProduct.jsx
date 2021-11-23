import React from "react";
//=============================================
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Header from "../Components/Header/Header";
import { makeStyles } from "@mui/styles";
import { ClassNames } from "@emotion/react";
//=============================================

const AddProduct = () => {
	return (
		<>
			<Container maxWidth="sm">
				<Stack
					direction="column"
					justifyContent="flex-start"
					alignItems="center"
					spacing={2}
				>
					<Header title="Dodaj nowy produkt do katalogu" size={20} />
					<form noValidate autoComplete="off">
						<TextField
							// className={classes.field}
							id="filled-basic"
							label="Nazwa produktu:"
							variant="filled"
							fullWidth
							required
						/>

						<TextField
							id="filled-basic"
							label="Ilość kcl w 100g:"
							variant="filled"
							fullWidth
							required
						/>

						<TextField
							id="filled-basic"
							label="Domyślna waga porcji:"
							variant="filled"
							fullWidth
							required
						/>
						<TextField
							id="outlined-multiline-flexible"
							variant="filled"
							fullWidth
							label="Uwagi:"
							multiline
							minRows={4}
							// value={value}
							// onChange={handleChange}
						/>
					</form>
					<Button variant="contained"> Dodaj </Button>
				</Stack>
			</Container>
		</>
	);
};
export default AddProduct;
