import React, { useState } from "react";
//=============================================
import { useDispatch, useSelector } from "react-redux";
//=============================================
import { Typography, Button, Grid, Tooltip, Container, Box, Accordion, AccordionDetails, AccordionSummary } from "@mui/material/";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
//=============================================

//=============================================
const ProductsListToSelct = ({ product }) => {
	const [expanded, setExpanded] = useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
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
				<Container
					sx={{ maxWidth: { xs: "360px", sm: "xl", md: "lg" }, padding: { xs: 0 } }}
					// sx={{ display: { xs: "none", sm: "block" } }}
				>
					<Accordion
						expanded={expanded === "panel1"}
						onChange={handleChange("panel1")}
						sx={{
							":hover": {
								boxShadow: 4,
							},
							boxShadow: 2,
						}}>
						<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id={"panel1bh-header"}>
							<Grid container alignItems={"center"}>
								{/* <Grid align="left" item xs={2}>
                        {listType === "Products" ? (
                            <Tooltip title="Dodaj do listy ulubionych" placement="left">
                                <div>
                                    <FavoriteCheckBox productId={productId} listType={listType} />
                                </div>
                            </Tooltip>
                        ) : null}
                    </Grid> */}
								<Grid item xs={6}>
									<Typography
										sx={{
											flexShrink: 0,
										}}>
										{product.name}
									</Typography>
								</Grid>
								<Grid item xs={4}>
									<Typography display="inline">W porcji:</Typography>
									<Typography
										display="inline"
										sx={{
											color: "text.secondary",
										}}>
										{` ${Math.round((product.defaultPortion / 100) * product.caloriesIn100)} kcl`}
									</Typography>
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
								{/* <Grid item xs={12} sm={6}>
                                    <Typography align="Center">Data dodania:</Typography>
                                    <Typography
                                align="Center"
                                sx={{
                                    color: "text.secondary",
                                }}>
                                {date}
                            </Typography>
                                </Grid> */}

								<Grid item alignItems="center">
									<Button
										item
										// onClick={() => checkListTypeAndDisptach()}
										variant="outlined"
										sx={{
											":hover": {
												color: "red",
												borderColor: "red",
											},
										}}>
										Usyń
									</Button>
								</Grid>
								{/* 
                    <Grid item>
                        <EditDialogWindow item listType={listType} productId={productId} productName={name} />
                    </Grid> */}
							</Grid>
						</AccordionDetails>
					</Accordion>
				</Container>
				{/* COL-1-========================================================================== */}
			</Grid>
		</>
	);
};
export default ProductsListToSelct;
