import React from "react";
import PropTypes from "prop-types";
//=============================================
import Box from "@mui/material/Box";

const Header = ({ title, size }) => {
	return (
		<Box
			sx={{
				m: 2,
				fontFamily: "Monospace",
				textAlign: "left",
				letterSpacing: 4,
				fontSize: size,
			}}
		>
			{title}
		</Box>
	);
};

Header.propTypes = {
	title: PropTypes.string,
	size: PropTypes.number,
};

export default Header;
