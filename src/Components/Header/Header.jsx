import React from "react";
import PropTypes from "prop-types";
//=============================================
import { Typography, Box } from "@mui/material/";
//=============================================

const Header = ({ title, size, variant }) => {
	const sizeModifier = size + 2;
	return (
		<Box>
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
					textAlign: "left",
					letterSpacing: 4,
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
