import React, { useEffect, setState } from "react";
import PropTypes from "prop-types";
//=============================================
import { DialogTitle } from "@mui/material";
//=============================================

const TitleEditWindow = ({ listType }) => {
	const checkListType = () => {
		if (listType === "Products") {
			return <DialogTitle>Edycja produktu w katalogu:</DialogTitle>;
		} else if (listType === "Statistic") {
			return <DialogTitle>Modyfikacja porcji:</DialogTitle>;
		}
	};

	return checkListType();
};

TitleEditWindow.prototype = {
	listType: PropTypes.string,
};

export default TitleEditWindow;
