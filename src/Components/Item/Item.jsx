import React from "react";
//=============================================
import { useDispatch } from "react-redux";
import { removeCaloris } from "../../Redux/actions/caloriesActions";
//=============================================
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const Item = (props) => {
	const dispatch = useDispatch();
	const { productId, name, portion, amountOfKclIn100g, remarks, date } = props;

	return (
		<>
			<Grid item xs={3}>
				<Typography>{name}</Typography>
			</Grid>
			<Grid item xs={1}>
				<Typography align="left">{portion}</Typography>
			</Grid>
			<Grid item xs={2}>
				<Typography align="center">{amountOfKclIn100g}</Typography>
			</Grid>
			<Grid item xs={1}>
				<Typography align="center">
					{Math.round((portion / 100) * amountOfKclIn100g)}
				</Typography>
			</Grid>
			<Grid item xs={2}>
				<Typography align="center">{remarks}</Typography>
			</Grid>
			<Grid item xs={1}>
				<Typography align="center">{date}</Typography>
			</Grid>
			<Grid item xs={1}>
				<Button onClick={() => dispatch(removeCaloris(productId))} variant="outlined">
					Usyń
				</Button>
			</Grid>
			<Grid item xs={1}>
				<Button variant="contained">Edytuj</Button>
			</Grid>
		</>
	);
};

export default Item;
