import React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const CategoryHeader = ({ title }) => {
	return (
		<>
			<Typography align="left" variant="body2">
				{title}
			</Typography>
			<Divider />
		</>
	);
};

export default CategoryHeader;
