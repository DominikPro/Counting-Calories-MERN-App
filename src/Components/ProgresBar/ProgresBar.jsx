import React from "react";
//=============================================
import { Box, LinearProgress, Grid } from "@mui/material/";
// import  from "@mui/material/LinearProgress";
import { Typography } from "@mui/material";
//=============================================
import Header from "../Header/Header";
//=============================================

export default function ProgresBar() {
	return (
		<Grid>
			<Typography
				sx={{
					mt: "50vh",
					fontSize: 20,
					fontFamily: "Monospace",
					textAlign: "center",
				}}>
				Ładowanie strony . . .
			</Typography>
			<Grid container xs={12} justifyContent="center" alignItems="center">
				<Grid item>
					<LinearProgress sx={{ height: "9px", width: "250px", alignContent: "center" }} />
				</Grid>
			</Grid>
		</Grid>
	);
}
