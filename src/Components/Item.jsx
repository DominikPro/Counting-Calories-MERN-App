import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const Item = (props) => {
	const { name, portion, amountOfKclIn100g, remarks } = props;
	console.log(portion);
	return (
		<>
			<Grid item xs={4}>
				<Typography>{name}</Typography>
			</Grid>
			<Grid item xs={1}>
				<Typography align="center">{portion}</Typography>
			</Grid>
			<Grid item xs={2}>
				<Typography align="center">{amountOfKclIn100g}</Typography>
			</Grid>
			<Grid item xs={1}>
				<Typography align="center">{(portion / 100) * amountOfKclIn100g}</Typography>
			</Grid>
			<Grid item xs={2}>
				<Typography align="center">{remarks}</Typography>
			</Grid>
			<Grid item xs={1}>
				<Button variant="outlined">Usyń</Button>
			</Grid>
			<Grid item xs={1}>
				<Button variant="contained">Edytuj</Button>
			</Grid>
		</>
	);
};

export default Item;
