import React from "react";
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

export default Header;
