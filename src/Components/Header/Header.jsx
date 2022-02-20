import React from "react";
import PropTypes from "prop-types";
//=============================================
import { Typography, Box } from "@mui/material/";
//=============================================

const Header = ({ title, size, variant, aligneOption }) => {
	const sizeModifier = size + 2;
	return (
		<Typography
			variant={variant}
			sx={{
				m: {
					md: 2,
					xs: 1,
				},
				fontSize: {
					lg: sizeModifier,
					md: 24,
					sm: 20,
					xs: 17,
				},
				fontFamily: "Monospace",
				textAlign: aligneOption,
				letterSpacing: 4,
			}}
		>
			{title}
		</Typography>
	);
};

Header.propTypes = {
	title: PropTypes.string,
	size: PropTypes.number,
};

export default Header;
