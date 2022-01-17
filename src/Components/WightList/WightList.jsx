import React from "react";
//=============================================
import { Button, TextField, Stack, Container } from "@mui/material/";
//=============================================
import Header from "../Header/Header";
//=============================================

const WightList = () => {
	return (
		<Container maxWidth="xs">
			<Header title="Pomiar wagi" size={18} />
			<TextField
				// onChange={(e) => handleChange(e)}
				name="caloriesIn100"
				// value={product.caloriesIn100}
				style={{ marginBottom: "10px" }}
				id="filled-basic"
				label="Ilość kcl w 100g:"
				variant="outlined"
				fullWidth
				required
			/>
		</Container>
	);
};

export default WightList;
