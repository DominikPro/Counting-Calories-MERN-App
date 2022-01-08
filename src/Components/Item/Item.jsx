import React from "react";
import PropTypes from "prop-types";
//=============================================
import { useDispatch } from "react-redux";
import { removeCaloris } from "../../Redux/actions/caloriesActions";
import { removeProduct } from "../../Redux/actions/productActions";
//=============================================
import EditDialogWindow from "../EditDialogWindow/EditDialogWindow";
//=============================================
import { Typography, Button, Grid } from "@mui/material/";
//=============================================

const Item = (props) => {
	const { listType, productId, name, portion, amountOfKclIn100g, remarks, date } = props;
	// console.log(listType);
	// console.log(productId);
	const dispatch = useDispatch();
	const checkListTypeAndDisptach = () => {
		console.log(listType);
		if (listType === "Statistic") {
			return dispatch(removeCaloris(productId));
		} else if (listType === "Products") {
			console.log("wchodzi");
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
				<EditDialogWindow
					listType={listType}
					productId={productId}
					productName={name}
				/>
			</Grid>
		</>
	);
};

Item.propTypes = {
	listType: PropTypes.string,
	productId: PropTypes.number,
	name: PropTypes.string,
	portion: PropTypes.number,
	amountOfKclIn100g: PropTypes.number,
	remarks: PropTypes.string,
	date: PropTypes.string,
};
export default Item;
