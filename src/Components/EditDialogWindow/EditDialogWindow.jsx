import React, { useState } from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";

const emails = ["username@gmail.com", "user02@gmail.com"];

function SimpleDialog(props) {
	const { onClose, selectedValue, open } = props;

	const handleClose = () => {
		onClose(selectedValue);
	};

	const handleListItemClick = (value) => {
		onClose(value);
	};

	return (
		<Dialog onClose={handleClose} open={open}>
			<DialogTitle>Edycja roduktu:</DialogTitle>
			<List sx={{ pt: 0 }}>
				<Button size="small" variant="outlined" onClick={() => handleListItemClick()}>
					Zapisz
				</Button>

				{/* {emails.map((email) => (
					<ListItem
						button
						onClick={() => handleListItemClick(email)}
						key={email}
					>
						<ListItemAvatar>
							<Avatar
								sx={{
									bgcolor: blue[100],
									color: blue[600],
								}}
								>
								<PersonIcon />
								</Avatar>
								</ListItemAvatar>
								<ListItemText primary={email} />
								</ListItem>
							))} */}
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

export default function EditDialogWindow() {
	const [open, setOpen] = useState(false);
	const [selectedValue, setSelectedValue] = useState(emails[1]);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = (value) => {
		setOpen(false);
		setSelectedValue(value);
	};

	// return (
	// 	<div>
	// 		<Typography variant="subtitle1" component="div">
	// 			Selected: {selectedValue}
	// 		</Typography>
	// 		<br />
	// 		<Button variant="outlined" onClick={handleClickOpen}>
	// 			Edytuj
	// 		</Button>
	// 		<SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
	// 	</div>
	// );

	return (
		<>
			<Button open={open} onClick={handleClickOpen} variant="contained">
				Edytuj
			</Button>

			<SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
		</>
	);
}
