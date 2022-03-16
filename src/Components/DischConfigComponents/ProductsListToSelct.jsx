import React, { useState } from "react";
//=============================================
import { v4 as uuidv4 } from "uuid";
//=============================================
import { Typography, Grid, Container, IconButton, Accordion, AccordionDetails, AccordionSummary } from "@mui/material/";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import AddIcon from "@mui/icons-material/Add";
//=============================================
const ProductsListToSelct = ({ product, setConfiguredDish }) => {
	const [expand, setExpand] = useState(false);
	const toggleAcordion = () => {
		setExpand((prev) => !prev);
	};

	const handleAddProductToSelectedLists = () => {
		setConfiguredDish((prevState) => ({ ...prevState, products: [...prevState.products, { ...product, id: uuidv4() }] }));
	};
	return (
		<>
			<Grid
				direction="row"
				container
				spacing={1}
				alignItems="center"
				sx={{
					marginTop: 1,
				}}>
				<Container sx={{ maxWidth: { xs: "360px", sm: "xl", md: "lg" }, minWidth: { sm: "450px", md: "600px" }, padding: { xs: 0 } }}>
					<Accordion
						expanded={expand}
						sx={{
							":hover": {
								boxShadow: 4,
							},
							boxShadow: 2,
						}}>
						<AccordionSummary
							expandIcon={
								<IconButton onClick={() => toggleAcordion()}>
									<ExpandMoreIcon />
								</IconButton>
							}
							aria-controls="panel1bh-content"
							id={"panel1bh-header"}>
							<Grid container alignItems={"center"}>
								<Grid item xs={6}>
									<Typography
										sx={{
											flexShrink: 0,
										}}>
										{product.name}
									</Typography>
								</Grid>
								<Grid item xs={5}>
									<Typography display="inline">W porcji:</Typography>
									<Typography
										display="inline"
										sx={{
											color: "text.secondary",
										}}>
										{` ${Math.round((product.defaultPortion / 100) * product.caloriesIn100)} kcl`}
									</Typography>
								</Grid>
								<Grid item xs={1}>
									<IconButton onClick={() => handleAddProductToSelectedLists()}>
										<AddIcon color="success" />
									</IconButton>
								</Grid>
							</Grid>
						</AccordionSummary>

						<AccordionDetails
							sx={{
								backgroundColor: "#f2f4f7",
							}}>
							<Grid container justifyContent="center" alignItems="center" xs={12} spacing={2}>
								<Grid item xs={12} sm={6}>
									<Typography align="Center">Porcja:</Typography>
									<Typography
										align="Center"
										sx={{
											color: "text.secondary",
										}}>
										{`${product.defaultPortion} g`}
									</Typography>
								</Grid>
								<Grid item xs={12} sm={6}>
									<Typography align="Center">Kalorii w 100 gramach:</Typography>

									<Typography
										align="Center"
										sx={{
											color: "text.secondary",
										}}>
										{`${product.caloriesIn100} kcl`}
									</Typography>
								</Grid>
								<Grid item xs={12} sm={6}>
									<Typography align="Center">Uwagi:</Typography>
									<Typography
										align="Center"
										sx={{
											color: "text.secondary",
										}}>
										{product.remarks}
									</Typography>
								</Grid>
							</Grid>
						</AccordionDetails>
					</Accordion>
				</Container>
			</Grid>
		</>
	);
};
export default ProductsListToSelct;
