import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
//=============================================
import { useSelector, useDispatch } from "react-redux";
import { editWeight } from "../../Redux/actions/weightActions";
//=============================================
import { DialogTitle, IconButton, Button, Stack, List, TextField, Dialog } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

function SimpleDialog({ onClose, open, editedWeight }) {
	const dispatch = useDispatch();
	const [changedWeight, setChangedWeight] = useState(editedWeight);

	const handleClose = () => {
		onClose();
	};

	const handleListItemClick = (value) => {
		onClose(value);
	};

	const updateWeightReducer = () => {
		dispatch(editWeight(changedWeight));
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setChangedWeight((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	return (
		<Dialog onClose={handleClose} open={open}>
			<List sx={{ ml: 1, mr: 2, mt: 0, mb: 2 }}>
				<Stack
					direction="column"
					justifyContent="center"
					alignItems="center"
					spacing={2}
				>
					{/* <form noValidate autoComplete="off"> */}
					<DialogTitle>{`Edycja pomiaru z dnia: ${changedWeight.date}`}</DialogTitle>

					<TextField
						onChange={(e) => handleChange(e)}
						name="weight"
						type="number"
						inputProps={{ min: "0", step: "0.1" }}
						value={changedWeight.weight}
						style={{ marginBottom: "10px" }}
						id="filled-basic"
						label="Waga"
						variant="outlined"
					/>
					{/* </form> */}

					<Button
						size="small"
						variant="contained"
						onClick={() => {
							updateWeightReducer();
							handleListItemClick();
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
	editedWeight: PropTypes.object,
};
//===============================================================================================================

export default function EditDialogWindowWeight({ editedWeightId }) {
	const [open, setOpen] = useState(false);

	const editedWeight = useSelector((state) => state.weightReducer.find((item) => item.id === editedWeightId));

	const handleClickOpen = () => {
		console.log(editedWeight);

		setOpen(true);
	};

	const handleClose = (value) => {
		setOpen(false);
	};

	return (
		<>
			<IconButton
				onClick={() => handleClickOpen()}
				edge="end"
				aria-label="Edytuj pomiar"
				color="success"
			>
				<EditIcon
					style={{
						marginRight: 10,
						marginLeft: 10,
					}}
				/>
			</IconButton>

			<SimpleDialog editedWeight={editedWeight} open={open} onClose={handleClose} />
		</>
	);
}
EditDialogWindowWeight.propTypes = {
	editedWeightId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
