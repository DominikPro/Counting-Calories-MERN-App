import React, { useState, useEffect, useRef } from "react";
//=============================================
import PropTypes from "prop-types";
//=============================================
import { useSelector, useDispatch } from "react-redux";
//=============================================
import { modifyCalories } from "../../Redux/actions/caloriesActions";

import { modifyProduct } from "../../Redux/actions/productActions";
//=============================================
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import List from "@mui/material/List";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
//=============================================
import TitleEditWindow from "./TitleEditWindow/TitleEditWindow";
//=============================================

// const emails = ["username@gmail.com", "user02@gmail.com"];
//doczytać o shallowEqual
//

function SimpleDialog({ onClose, selectedValue, open, listType, editedProduct }) {
	const dispatch = useDispatch();
	const [changedProduct, setChangedProduct] = useState({
		listType: "",
		id: "",
		name: "",
		defaultPortion: 0,
		caloriesIn100: 0,
		remarks: "",
		date: "",
	});

	const handleClose = () => {
		onClose(selectedValue);
	};

	const handleListItemClick = (value) => {
		onClose(value);
	};

	useEffect(() => {
		console.log(editedProduct);
	}, [changedProduct]);

	useEffect(() => {
		if (editedProduct !== undefined) {
			return setChangedProduct(editedProduct);
		}
	}, [editedProduct]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setChangedProduct((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	return (
		<Dialog onClose={handleClose} open={open}>
			{/* <DialogTitle>Edycja roduktu:</DialogTitle> */}

			{/* Poprawić miejsce pobierania doanych odnosnie typu listy */}
			<TitleEditWindow listType={listType} />
			<List sx={{ m: 2 }}>
				<Stack
					direction="column"
					justifyContent="flex-start"
					alignItems="center"
					spacing={2}
				>
					{/* <Header title="Dodaj nowy produkt do katalogu" size={20} /> */}
					<form noValidate autoComplete="off">
						{changedProduct.listType === "Products" ? (
							<TextField
								onChange={(e) => handleChange(e)}
								value={changedProduct.name}
								name="name"
								style={{
									marginBottom: "10px",
								}}
								id="filled-basic"
								label="Nazwa produktu:"
								variant="outlined"
								fullWidth
								required
							/>
						) : (
							<h3>{`Edytowany produkt: ${changedProduct.name}`}</h3>
						)}

						<TextField
							onChange={(e) => handleChange(e)}
							name="caloriesIn100"
							type="number"
							value={changedProduct.caloriesIn100}
							style={{ marginBottom: "10px" }}
							id="filled-basic"
							label="Ilość kcl w 100g:"
							variant="outlined"
							fullWidth
							required
						/>

						<TextField
							onChange={(e) => handleChange(e)}
							name="defaultPortion"
							type="number"
							value={changedProduct.defaultPortion}
							style={{ marginBottom: "10px" }}
							id="filled-basic"
							label="Domyślna waga porcji:"
							variant="outlined"
							fullWidth
						/>
						<TextField
							onChange={(e) => handleChange(e)}
							name="remarks"
							value={changedProduct.remarks}
							id="outlined-multiline-flexible"
							variant="outlined"
							fullWidth
							label="Uwagi:"
							multiline
							minRows={4}
						/>
					</form>

					<Button
						size="small"
						variant="outlined"
						onClick={() => {
							console.log(editedProduct);
							if (changedProduct.listType === "Statistic") {
								dispatch(
									modifyCalories(changedProduct)
								);
								handleListItemClick();
							} else if (
								changedProduct.listType === "Products"
							) {
								dispatch(modifyProduct(changedProduct));
								handleListItemClick();
							}
							// console.log(changedProduct);
						}}
					>
						Zapisz
					</Button>
				</Stack>
			</List>
		</Dialog>
	);
}

SimpleDialog.propTypes = {
	onClose: PropTypes.func.isRequired,
	open: PropTypes.bool.isRequired,
	selectedValue: PropTypes.string.isRequired,
};
//===============================================================================================================

export default function EditDialogWindow({ listType, productId }) {
	const [open, setOpen] = useState(false);
	const [editedProduct, setEditedProduct] = useState();
	// const [selectedValue, setSelectedValue] = useState(emails[1]);

	const productCalories = useSelector((state) => state.calories);
	const productList = useSelector((state) => state.products);
	// console.log(productCalories);
	// console.log(productList);

	const findEditedProduct = () => {
		if (listType === "Statistic") {
			setEditedProduct(productCalories.find((item) => item.id === productId));
		} else if (listType === "Products") {
			setEditedProduct(productList.find((item) => item.id === productId));
		}
	};
	useEffect(() => {
		// console.log(editedProduct);
	}, [editedProduct]);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = (value) => {
		setOpen(false);
	};

	return (
		<>
			{/* <Button open={open} onClick={handleClickOpen} variant="contained"> */}
			<Button
				open={open}
				onClick={() => (findEditedProduct(), handleClickOpen())}
				variant="contained"
			>
				Edytuj
			</Button>

			<SimpleDialog
				editedProduct={editedProduct}
				listType={listType}
				productId={productId}
				// selectedValue={selectedValue}
				open={open}
				onClose={handleClose}
			/>
		</>
	);
}
EditDialogWindow.propTypes = {
	listType: PropTypes.string,

	productId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
