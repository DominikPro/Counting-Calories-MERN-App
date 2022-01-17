import React from "react";
import PropTypes from "prop-types";
//=============================================
import { Typography } from "@mui/material";
//=============================================

const TitleEditWindow = ({ listType }) => {
	const checkListType = () => {
		if (listType === "Products") {
			return (
				<Typography
					align="center"
					variant="h5"
					style={{ marginTop: 10, marginBottom: 10 }}
				>
					Edycja produktu w katalogu:
				</Typography>
			);
		} else if (listType === "Statistic") {
			return (
				<Typography
					align="center"
					variant="h5"
					style={{ marginTop: 10, marginBottom: 10 }}
				>
					Modyfikacja porcji:
				</Typography>
			);
		}
	};

	return checkListType();
};

TitleEditWindow.prototype = {
	listType: PropTypes.string,
};

export default TitleEditWindow;
