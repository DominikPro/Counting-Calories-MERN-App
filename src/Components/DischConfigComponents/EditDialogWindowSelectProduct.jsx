import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
//=============================================
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
// import TitleEditWindow from "./TitleEditWindow/TitleEditWindow";
//=============================================

function SimpleDialog({ onClose, selectedValue, open, editedProduct, setConfiguredDish }) {
	const [changedProductWeight, setChangedProductWeight] = useState({ listType: "", id: "", name: "", defaultPortion: "", caloriesIn100: "", remarks: "", favorite: false });

	//updates the modified product in state
	useEffect(() => {
		setChangedProductWeight(editedProduct);
	}, [editedProduct]);

	const handleClose = () => {
		onClose(selectedValue);
	};

	const handleListItemClick = (value) => {
		onClose(value);
	};

	const [validat, setValidate] = useState({
		caloriesIn100: false,
	});

	const handleSetChangInDishConfiguration = () => {
		setConfiguredDish((prevState) => {
			const prevStateWithOutRemovedChangedProduct = prevState.products.filter((product) => product.id !== changedProductWeight.id);
			return { ...prevState, products: [...prevStateWithOutRemovedChangedProduct, changedProductWeight] };
		});
	};

	const handleChange = (e) => {
		const { value, name } = e.target;
		setChangedProductWeight((prevState) => ({ ...prevState, [name]: value }));
	};

	return (
		<Dialog onClose={handleClose} open={open}>
			<List sx={{ ml: 1, mr: 2, mt: 0, mb: 2 }}>
				<Stack direction="column" justifyContent="flex-start" alignItems="center" spacing={2}>
					<form noValidate autoComplete="off">
						<DialogTitle>{`Edytowany produkt: ${editedProduct.name}`}</DialogTitle>

						<TextField
							onChange={(e) => handleChange(e)}
							// onBlur={(e) => validatInput(e)}
							value={changedProductWeight.defaultPortion}
							error={validat.defaultPortion}
							xs={{ marginBottom: "10px" }}
							name="defaultPortion"
							type="number"
							id="filled-basic"
							label="Domyślna waga porcji:"
							variant="outlined"
							fullWidth
						/>
					</form>

					<Button
						onClick={() => {
							handleSetChangInDishConfiguration();
							handleClose();
						}}
						size="small"
						variant="contained">
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

export default function EditDialogWindowSelectProduct({ product, setConfiguredDish }) {
	const [open, setOpen] = useState(false);

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
					handleClickOpen();
				}}
				variant="text">
				{`${product.defaultPortion} g`}
			</Button>

			<SimpleDialog
				editedProduct={product}
				setConfiguredDish={setConfiguredDish}
				// selectedValue={selectedValue}
				open={open}
				onClose={handleClose}
			/>
		</>
	);
}
EditDialogWindowSelectProduct.propTypes = {
	listType: PropTypes.string,

	productId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
