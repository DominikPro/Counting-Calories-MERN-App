import React from "react";
//=============================================
import { Typography, Grid, Paper, Box, Button, IconButton } from "@mui/material/";
import DeleteIcon from "@mui/icons-material/Delete";
import EditDialogWindowSelectProduct from "./EditDialogWindowSelectProduct";
import DishCalorieCounter from "./DishCalorieCounter";
//=============================================

const SelectedProducts = ({ configuredDish, setConfiguredDish }) => {
	const handleDeletProductFromDish = (product) => {
		setConfiguredDish((prevState) => ({ ...prevState, products: prevState.products.filter((productFromDish) => productFromDish.id !== product.id) }));
	};
	return (
		<Paper elevation={5} rounded={8} sx={{ padding: "5px", minWidth: { xs: "95vw", sm: "540px", md: "680px" }, alignItems: "center" }}>
			<Grid container xs={12} pb="10px" paddingX={"10px"} direction="column" justifyContent="center" alignItems="center">
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

				<Grid container rowSpacing={1} columnSpacing={1} columns={{ xs: 2, sm: 8, md: 12 }}>
					{configuredDish.products.map((product) => (
						<Grid xs={2} sm={4} md container justifyContent="center" alignItems="center">
							<Box
								sx={{
									displa: "flex",
									border: 1,
									borderColor: "#bae5fa",
									borderRadius: 4,
									margin: "5px",
									paddingLeft: "10px",
									minWidth: { xs: "90vw", sm: "260px", md: "260px", xl: "365px" },
									paddingTop: "5px",

									// maxWidth: "330px",
								}}>
								<Grid container direction="row" justifyContent="space-between" alignItems="center">
									<Grid item>
										<Typography display="inline">{`${product.name}:`}</Typography>
									</Grid>
									<Grid item>
										<EditDialogWindowSelectProduct product={product} setConfiguredDish={setConfiguredDish} />
									</Grid>
									<Grid item>
										<IconButton onClick={() => handleDeletProductFromDish(product)} sx={{ marginRight: "5px", ":hover": { color: "red" } }}>
											<DeleteIcon />
										</IconButton>
									</Grid>
								</Grid>
							</Box>
						</Grid>
					))}
				</Grid>
				<Grid xs={12} container direction="row" justifyContent="center" alignItems="center">
					<DishCalorieCounter configuredDish={configuredDish} />
				</Grid>
			</Grid>
		</Paper>
	);
};

export default SelectedProducts;
