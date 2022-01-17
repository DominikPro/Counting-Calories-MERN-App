import React, { useState } from "react";
import PropTypes from "prop-types";
//=============================================
import { useSelector } from "react-redux";
//=============================================
import AddIcon from "@mui/icons-material/Add";
import Favorite from "@mui/icons-material/Favorite";
import {
	Button,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	DialogTitle,
	Dialog,
	Divider,
	Typography,
} from "@mui/material/";
//=============================================

export default function FavoriteList({ addtoform }) {
	const [open, setOpen] = useState(false);

	const favoriteProducts = useSelector((state) => state.products.filter((item) => item.favorite === true));

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Button variant="outlined" onClick={handleClickOpen}>
				<Favorite />
				<Typography ml={1}>Lista ulubionych produktów</Typography>
			</Button>
			<SimpleDialog
				open={open}
				onClose={handleClose}
				addtoform={addtoform}
				favoriteProducts={favoriteProducts}
			/>
		</div>
	);
}
//=================================================================================================

function SimpleDialog({ onClose, selectedValue, open, addtoform, favoriteProducts }) {
	const handleClose = () => {
		onClose(selectedValue);
	};

	const handleListItemClick = (value) => {
		addtoform(value);
		onClose(value);
	};

	return (
		<Dialog onClose={handleClose} open={open}>
			<DialogTitle>Twoje ulubione produkty:</DialogTitle>
			<Divider variant="middle" />
			<List sx={{ pt: 0 }}>
				{favoriteProducts.map((product) => (
					<ListItem
						key={product.id}
						button
						onClick={() => handleListItemClick(product)}
					>
						<ListItemAvatar>
							<AddIcon color="success" />
						</ListItemAvatar>
						<ListItemText primary={product.name} />
						<Typography variant="overline">{`${product.caloriesIn100} kcl/100g`}</Typography>
					</ListItem>
				))}
			</List>
		</Dialog>
	);
}

SimpleDialog.propTypes = {
	addtoform: PropTypes.func,
	favoriteProducts: PropTypes.array,
	onClose: PropTypes.func.isRequired,
	open: PropTypes.bool.isRequired,
	selectedValue: PropTypes.string,
};
