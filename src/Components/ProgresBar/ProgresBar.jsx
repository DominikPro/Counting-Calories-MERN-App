import React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Header from "../Header/Header";
import { Typography } from "@mui/material";

export default function ProgresBar() {
	return (
		<Box sx={{ width: "100%" }}>
			<Typography
				sx={{
					mt: "50vh",
					fontSize: 20,
					fontFamily: "Monospace",
					textAlign: "center",
				}}
			>
				Ładowanie strony . . .
			</Typography>
			<LinearProgress sx={{ height: "9px" }} />
		</Box>
	);
}
