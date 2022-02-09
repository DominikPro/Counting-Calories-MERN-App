import React from "react";
import PropTypes from "prop-types";
//=============================================
import { Typography, Box } from "@mui/material/";
//=============================================

const Header = ({ title, size, variant }) => {
	return (
		<Box>
			<Typography
				variant={variant}
				sx={{
					m: 2,
					fontFamily: "Monospace",
					textAlign: "left",
					letterSpacing: 4,
					fontSize: size,
				}}
			>
				{title}
			</Typography>
		</Box>
	);
};

Header.propTypes = {
	title: PropTypes.string,
	size: PropTypes.number,
};

export default Header;
