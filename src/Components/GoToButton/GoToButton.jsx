import React from "react";
import PropTypes from "prop-types";
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
				variant="outlined"
				onClick={(e) => {
					console.log("Przejdź");
				}}
			>
				{goToButtonName}
			</Button>
		</Box>
	);
};
GoToButton.propTypes = {
	goToButtonName: PropTypes.string,
	to: PropTypes.string,
};

export default GoToButton;
