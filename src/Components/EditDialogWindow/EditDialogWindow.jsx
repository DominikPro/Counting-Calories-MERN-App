import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
//=============================================
import { useSelector, useDispatch } from "react-redux";
import { modifyCalories } from "../../Redux/actions/caloriesActions";
import { modifyProduct } from "../../Redux/actions/productActions";
//=============================================
import { DialogTitle } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import List from "@mui/material/List";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
//=============================================
import TitleEditWindow from "./TitleEditWindow/TitleEditWindow";
//=============================================

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
			<TitleEditWindow listType={listType} />
			<List sx={{ ml: 1, mr: 2, mt: 0, mb: 2 }}>
				<Stack
					direction="column"
					justifyContent="flex-start"
					alignItems="center"
					spacing={2}
				>
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
							<DialogTitle>{`Edytowany produkt: ${changedProduct.name}`}</DialogTitle>
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
						variant="contained"
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
	useEffect(() => {}, [editedProduct]);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = (value) => {
		setOpen(false);
	};

	return (
		<>
			<Button
				open={open}
				onClick={() => {
					findEditedProduct();
					handleClickOpen();
				}}
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
