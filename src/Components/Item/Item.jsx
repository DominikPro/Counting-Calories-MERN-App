import React from "react";
//=============================================
import { useDispatch } from "react-redux";
import { removeCaloris } from "../../Redux/actions/caloriesActions";
import { removeProduct } from "../../Redux/actions/productActions";
//=============================================
import { Typography, Button, Grid } from "@mui/material/";
//=============================================

const Item = (props) => {
	const { listType, productId, name, portion, amountOfKclIn100g, remarks, date } = props;
	const dispatch = useDispatch();
	const checkListTypeAndDisptach = () => {
		if (listType === "Statistic") {
			return dispatch(removeCaloris(productId));
		} else if (listType === "Products") {
			return dispatch(removeProduct(productId));
		}
	};

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
				<Button onClick={() => checkListTypeAndDisptach()} variant="outlined">
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
