import React from "react";
import { Link } from "react-router-dom";
//=============================================
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
//=============================================

const GoToButton = ({ goToButtonName, to }) => {
	return (
		<Box m={1} display="flex" justifyContent="center" alignItems="center">
			<Button
				to={to}
				component={Link}
				size="small"
				onClick={(e) => {
					console.log("Przejdź");
				}}
				variant="outlined"
			>
				{goToButtonName}
			</Button>
		</Box>
	);
};

export default GoToButton;
