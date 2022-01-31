import React from "react";
import PropTypes from "prop-types";
//=============================================
import { useDispatch } from "react-redux";
import { removeCaloris } from "../../../Redux/actions/caloriesActions";
import { removeProduct } from "../../../Redux/actions/productActions";
//=============================================
import EditDialogWindow from "../../EditDialogWindow/EditDialogWindow";
import FavoriteCheckBox from "../../FavoriteCheckBox/FavoriteCheckBox";
//=============================================
import { Typography, Button, Grid, Tooltip } from "@mui/material/";
//=============================================

const Item = ({ listType, productId, name, portion, amountOfKclIn100g, remarks, date }) => {
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
			{/* COL-1-========================================================================== */}
			<Grid item xs={2}>
				<Typography align="left">{name}</Typography>
			</Grid>
			<Grid align="center" item xs={1}>
				{listType === "Products" ? (
					<Tooltip title="Dodaj do listy ulubionych" placement="left">
						<div>
							<FavoriteCheckBox
								productId={productId}
								listType={listType}
							/>
						</div>
					</Tooltip>
				) : null}
			</Grid>
			{/* COL-2-========================================================================== */}
			<Grid item xs={1}>
				<Typography align="left">{portion}</Typography>
			</Grid>
			{/* COL-3-========================================================================== */}

			<Grid item xs={2}>
				<Typography align="center">{amountOfKclIn100g}</Typography>
			</Grid>
			{/* COL-4-========================================================================== */}

			<Grid item xs={1}>
				<Typography align="center">
					{Math.round((portion / 100) * amountOfKclIn100g)}
				</Typography>
			</Grid>
			{/* COL-5-========================================================================== */}

			<Grid item xs={1}>
				<Typography align="center">{remarks}</Typography>
			</Grid>
			{/* COL-6-========================================================================== */}

			<Grid item xs={1}>
				<Typography align="center">{date}</Typography>
			</Grid>
			{/* COL-7-========================================================================== */}

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
			{/* ========================================================================== */}
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
