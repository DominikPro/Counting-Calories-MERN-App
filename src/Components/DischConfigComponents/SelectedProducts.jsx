import React from "react";
//=============================================
import { Typography, Grid, Paper, Box, IconButton } from "@mui/material/";
import DeleteIcon from "@mui/icons-material/Delete";

//=============================================

const SelectedProducts = () => {
	const selectedProducts = [
		{ name: "Jogurt", weight: "150" },
		{ name: "Musli", weight: "150" },
		{ name: "Banan", weight: "150" },
		{ name: "ogórek", weight: "15" },
		{ name: "Miód", weight: "15" },
		{ name: "Miód", weight: "15" },
		{ name: "Miód", weight: "15" },
		{ name: "Miód", weight: "15" },
		{ name: "Miód", weight: "15" },
		{ name: "Miód", weight: "15" },
		{ name: "Miód", weight: "15" },
	];

	return (
		<Paper elevation={5} rounded={8}>
			<Grid container xs={12} pb="10px" direction="column" justifyContent="center" alignItems="center">
				<Grid item>
					<Typography
						variant="h3"
						sx={{
							mt: {
								xs: "5px",
								md: "10px",
							},
							mb: {
								xs: "10px",
								md: "15px",
							},

							fontSize: {
								sm: 20,
								xs: 17,
							},
							fontFamily: "Monospace",
							textAlign: "left",
							letterSpacing: 4,
						}}>
						Skład dania:
					</Typography>
				</Grid>

				<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2 }} columns={{ xs: 2, sm: 6, md: 12 }}>
					{selectedProducts.map((product) => (
						<Grid xs={2} sm={2} md={3} container justifyContent="center" alignItems="center">
							<Box
								sx={{
									displa: "flex",
									border: 1,
									borderColor: "#bae5fa",
									borderRadius: 4,
									margin: "2px",
									paddingLeft: "10px",
									paddingTop: "5px",
									minWidth: "220px",
									maxWidth: "330px",
								}}>
								<Grid container direction="row" justifyContent="space-between" alignItems="center">
									<Grid item>
										<Typography display="inline">{product.name}</Typography>
									</Grid>
									<Grid item>
										<Typography
											display="inline"
											sx={{
												color: "text.secondary",
											}}>
											{`${product.weight} gram`}
										</Typography>
									</Grid>
									<Grid item>
										<IconButton sx={{ marginRight: "5px", ":hover": { color: "red" } }}>
											<DeleteIcon />
										</IconButton>
									</Grid>
								</Grid>
							</Box>
						</Grid>
					))}
				</Grid>
			</Grid>
		</Paper>
	);
};

export default SelectedProducts;
