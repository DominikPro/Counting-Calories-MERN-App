import React, { useState } from "react";
import PropTypes from "prop-types";
//=============================================
import { useSelector } from "react-redux";
//=============================================
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import Tab from "@mui/material/Tab";
import AddIcon from "@mui/icons-material/Add";
import Favorite from "@mui/icons-material/Favorite";
import { Button, List, ListItem, ListItemAvatar, ListItemText, DialogTitle, Dialog, Divider, Typography } from "@mui/material/";
//=============================================

export default function FavoriteList({ addtoform }) {
	const [open, setOpen] = useState(false);

	const favoriteProducts = useSelector((state) => state.products.filter((item) => item.favorite === true));
	const favoriteDishes = useSelector((state) => state.dishes.filter((dish) => dish.favorite === true));

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
				<Typography ml={1}>Lista ulubionych </Typography>
			</Button>
			<SimpleDialog sx={{ marginLeft: 0 }} open={open} onClose={handleClose} addtoform={addtoform} favoriteProducts={favoriteProducts} favoriteDishes={favoriteDishes} />
		</div>
	);
}
//=================================================================================================

function SimpleDialog({ onClose, selectedValue, open, addtoform, favoriteProducts, favoriteDishes }) {
	const [value, setValue] = useState("1");

	const handleClose = () => {
		onClose(selectedValue);
	};

	const handleListItemClick = (value) => {
		addtoform(value);
		onClose(value);
	};
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Dialog onClose={handleClose} open={open}>
			<DialogTitle sx={{ minWidth: { xs: "355px" } }}>Twoje ulubione produkty:</DialogTitle>
			<Divider variant="middle" />
			<TabContext value={value}>
				<TabList onChange={handleChange} aria-label="lab API tabs example">
					<Tab label="Produkty" value="1" />
					<Tab label="Dania" value="2" />
				</TabList>
				<TabPanel value="1" style={{ padding: "5px" }}>
					<List>
						{favoriteProducts.map((product) => (
							<ListItem key={product.id} button onClick={() => handleListItemClick(product)}>
								<ListItemAvatar>
									<AddIcon color="success" />
								</ListItemAvatar>
								<ListItemText primary={product.name} />
								<Typography variant="overline">{`${product.caloriesIn100} kcl/100g`}</Typography>
							</ListItem>
						))}
					</List>
				</TabPanel>
				<TabPanel value="2" style={{ padding: "5px" }}>
					<List>
						{favoriteDishes.map((dishe) => (
							<ListItem key={dishe.id} button onClick={() => handleListItemClick(dishe)}>
								<ListItemAvatar>
									<AddIcon color="success" />
								</ListItemAvatar>
								<ListItemText primary={dishe.name} />
								<Typography variant="overline">{`${dishe.caloriesIn100} kcl/100g`}</Typography>
							</ListItem>
						))}
					</List>
				</TabPanel>
			</TabContext>
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
